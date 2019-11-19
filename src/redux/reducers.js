import { combineReducers } from "redux";
import URLS from "../utils/urls";

export const playersReducer = function(state = [], action) {
  switch (action.type) {
    case "GET_ALL_PLAYERS":
      return action.players;
    case "GET_PLAYERS_BY_URL":
      //console.log('URL call...')
      return action.players;
    default:
      return state;
  }
};

export const favoritesReducer = function(state = [], action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      //console.log('A call to add a favorite...');
      return state + 1;
    case "REMOVE_FAVORITE":
      //console.log('A call to remove a favorite...');
      return state - 1;
    case "SET_FAVORITES":
      return action.favorites;
    default:
      return state;
  }
};

export const viewingFavoritesReducer = function(state = false, action) {
  switch (action.type) {
    case "VIEWING_FAVORITES":
      return true;
    case "UNVIEWING_FAVORITES":
      return false;
    default:
      return state;
  }
};

export const urlReducer = function(state = URLS.players, action) {
  switch (action.type) {
    case "UPDATE_URL":
      //console.log('Updating to', action.url)
      return action.url;
    default:
      return state;
  }
};

export const pageReducer = function(state = {  }, action) {
  switch (action.type) {
    case "CALCULATE_PAGES":
      return { ...state, count: action.count, current: 1 };
    case "SET_CURRENT_PAGE":
      //console.log('Current page being set to ', action.page)
      return { ...state, current: action.page };
    case "CLEAR_CURRENT_PAGE":
      return { ...state, current: 1 };
    default:
      return state;
  }
};

export const countReducer = function(state = 0, action) {
  switch (action.type) {
    case "UPDATE_COUNT":
      return action.count;

    default:
      return state;
  }
};

export const queryReducer = function(state = "", action) {
  switch (action.type) {
    case "UPDATE_QUERY":
      return action.query;
    default:
      return state;
  }
};

export const searchReducer = function(state = "", action) {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return action.search;
    case "CLEAR_SEARCH":
      return "";
    default:
      return state;
  }
};

export const viewReducer = function(state = [], action) {
  switch (action.type) {
    case "UPDATE_VIEW":
      return action.players;
    default:
      return state;
  }
};

export const loadingReducer = function(state = true, action) {
  switch (action.type) {
    case "UPDATE_LOADING":
      return !state;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  players: playersReducer,
  favorites: favoritesReducer,
  url: urlReducer,
  pages: pageReducer,
  search: searchReducer,
  query: queryReducer,
  count: countReducer,
  view: viewReducer,
  loading: loadingReducer,
  viewingFavorites: viewingFavoritesReducer
});
