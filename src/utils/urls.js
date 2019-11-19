/* just some handy reusable URLs for the project */

const API_URL = `http://nba-player-api-dev.us-east-1.elasticbeanstalk.com`;

export default {
  favorites: `${API_URL}/favorites`,
  players: `${API_URL}/players`,
  players_first_ten:
    `${API_URL}/players/?q=&_page=1&_limit=10`,
  teams: `${API_URL}/teams`,
  player: id => `${API_URL}/players/${id}`,
  team: id => `${API_URL}/teams/${id}`,
  query: (url, query = "") => {
    let q = `q=${query}`;
    
    
    return `${url}/?${q}`;
  },
  getSearchUrl: (url, page = 1) => {
    return `${url}&_page=${page}&_limit=10`;
  },

  images: "/images"
};

