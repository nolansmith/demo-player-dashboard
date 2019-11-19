import axios from "axios";
import URLS from "./urls";

//function to get all the players from the API
export const fetchPlayerData = async function(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    return console.error(error.message);
  }
};

//joke to add a friend named Sam
export const addSam = function() {
  let sam = {
    favorite: "no",
    team_name: "Charlotte Hornets",
    createdAt: "2019-05-08T13:50:51.644Z",
    editedAt: "2019-05-08T13:50:51.644Z",
    name: "Samuel Greene",
    college: "Lenoir-Rhyne/State Rec",
    position: "Small Forward",
    image: "samuel_greene.png",
    team: 4,
    id: 99
  };
  return axios.get(URLS.player(99)).catch(() => {
    axios.post(URLS.players, sam);
  });
};

//function to get Json data from the server
//surprisingly reusable for all types of data
export const getPlayerDataJson = async function(url) {
  const playerData = await fetchPlayerData(url);
  return playerData.data;
};

//get all players
export const getAllPlayers = function() {
  return getPlayerDataJson(URLS.players);
};
 
//this method checks to see if server data has team_name and favorite for each player
//returns a promise to handle
export const checkForValidPlayerData = function() {
  //check if the player data on the server is up to date
  //console.log('Checking or valid server data...');
  return getTeamData().then(({ data }) => {
    getAllPlayers().then(players => {
      //console.log('Getting players: ', players.length);
      //console.log('Teamds: ', data.length);
      players.map(player => {
        !player.favorite
          ? putPlayerData(player.id, {
              favorite: "no",
              team_name: getTeamById(player.team, data).name,
              ...player
            }).catch(error => console.log(error))
          : null; //console.log('Player ', player.name, ' was already a favorite!');
      });
    });
  });
};

/* ####BEGIN REDUX THUNK METHODS#### */

export const fetchAllPlayers = function() {
  //console.log('Fetch called');
  return function(dispatch) {
    return axios
      .get(URLS.players)
      .then(({ data }) => {
        dispatch({ type: "GET_ALL_PLAYERS", players: data });
        dispatch({
          type: "CALCULATE_PAGES",
          count: Math.ceil(data.length / 10)
        });
        dispatch({ type: "UPDATE_COUNT", count: data.length });
        dispatch({ type: "UPDATE_URL", url: URLS.players });
      })
      .then(() => dispatch({ type: "CLEAR_SEARCH", search: "All Players" }));
  };
};

//this clears search items and goes to main page
export const goToHomepage = function() {
  return function(dispatch) {
    dispatch({ type: "UNVIEWING_FAVORITES" });
    dispatch({ type: "UPDATE_LOADING" });
    dispatch(fetchAllPlayers());
  };
};

//create a function to stat the search
//this will populate the metadata not the actual players in state
export const statPlayerSearch = function(search = "", url = URLS.players) {
  //console.log('Statting player search for...', url)
  return function(dispatch) {
    return axios.get(URLS.query(url, search)).then(({ data }) => {
      dispatch({ type: "UPDATE_COUNT", count: data.length });
      //console.log('Results from URL: ', data.length, 'Pages: ', Math.ceil(data.length / 10));
      dispatch({ type: "SET_CURRENT_PAGE", current: 1 });
      dispatch({ type: "CALCULATE_PAGES", count: Math.ceil(data.length / 10) });
      dispatch({ type: "UPDATE_URL", url: url });

      dispatch({ type: "UPDATE_SEARCH", search: search });
    });
  };
};

//this method actually populates the players we'll be looking at
//the 10 retrieved
export const fetchPlayersByURL = function(url = URLS.players_first_ten) {
  return function(dispatch) {
    return axios.get(url).then(({ data }) => {
      dispatch({ type: "GET_PLAYERS_BY_URL", players: data });
      //dispatch({ type: "UPDATE_COUNT", count: data.length });
      dispatch({ type: "UPDATE_LOADING" });
    });
  }; //inner function
};

//function to just retrieve favorites, not actually showing the data
export const getFavorites = function() {
  return function(dispatch) {
    return axios.get(URLS.favorites).then(({ data }) => {
      dispatch({ type: "SET_FAVORITES", favorites: data });
    });
  };
};

//function to create new favorites
//activated by star press on a player card
export const createFavorite = function(player) {
  return function(dispatch) {
    return axios
      .post(URLS.favorites, player)
      .then(() => {
        axios.get(URLS.favorites).then(({ data }) => {
          //console.log('Favorites should now be: ', data);
          dispatch({ type: "SET_FAVORITES", favorites: data });
        });
      })
      .catch(error => console.error(error));
  };
};

//function to remove a favorite
export const removeFavorite = function(player) {
  return function(dispatch) {
    return axios
      .delete(`${URLS.favorites}/${player.id}`)
      .then(() => {
        axios.get(URLS.favorites).then(({ data }) => {
          //console.log('Favorites should now be: ', data);
          dispatch({ type: "SET_FAVORITES", favorites: data });
        });
      })
      .catch(error => console.error(error));
  };
};

//return a promise from team data
//useful for when you need all the teams
export const getTeamData = function() {
  return axios.get(URLS.teams);
};

//function to find a team by the ID
//handy because of the {Team.name}->{Player.team} relationship
export const getTeamById = function(id, teams) {
  //found team variable
  var found = teams.find(team => {
    return parseInt(id) === parseInt(team.id);
  });

  // console.log('Team Found: ', found);
  return found;
};

//function to add the team_name and attribute to player record
export const putPlayerData = function(id, data, url = `${URLS.players}`) {
  return axios.put(`${url}/${id}`, data);
};

//get single player data, we will use this to fetch and update player data
export const getSinglePlayer = function(id) {
  return axios.get(`${URLS.players}/${id}`);
};
