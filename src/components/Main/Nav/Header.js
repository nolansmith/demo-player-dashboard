import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../Search/index.js";
import FavBar from "../Favorite/FavBar.js";
import Home from "../Nav/Home.js";
import URLS from "../../../utils/urls.js";

import { fetchPlayersByURL, getFavorites } from "../../../utils/index.js";

/* Header navigation component */

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          zIndex: "150",
          backgroundColor: "#009448",
          width: "100%",
          position: "fixed",
          top: 0,
          padding: "20px auto",
          borderBottom: "1px solid black",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Search
          handleSearch={this.handleSearch}
          clearSearch={this.clearSearch}
        />
        <div className="d-none d-lg-block">
          <h3
            style={{
              color: "#fff",
              fontFamily: "Flama-Bold, sans-serif",
              fontWeight: "bold"
            }}
          >
            NBA Player Dashboard
          </h3>
        </div>

        <div className="">
          <h1>
            <Home />
          </h1>
        </div>

        <div className="">
          <h1>
            <FavBar showFavorites={this.showFavorites} />
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    pages: state.pages,
    url: state.url,
    search: state.search,
    favorites: state.favorites,
    count: state.count,
    view: state.view,
    query: state.query,
    loading: state.loading,
    viewingFavorites: state.viewingFavorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorites: () => {
      dispatch(getFavorites());
    },
    updatePlayerView: url => {
      dispatch({ type: "UPDATE_LOADING" });
      dispatch(fetchPlayersByURL(url));
    },
    showFavorites: () => {
      dispatch({ type: "VIEWING_FAVORITES", status: true });
      dispatch({ type: "UPDATE_LOADING" });
      dispatch(Utils.statPlayerSearch("", URLS.favorites));
      let strUrl = URLS.getSearchUrl(URLS.favorites);
      dispatch(Utils.fetchPlayersByURL(strUrl));
    },

    setCurrentPage: page => dispatch({ type: "SET_CURRENT_PAGE", page: page })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
