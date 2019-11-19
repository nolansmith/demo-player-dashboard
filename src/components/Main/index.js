import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchPlayersByURL,
  statPlayerSearch,
  checkForValidPlayerData,
  getFavorites,
  getTeamData,

} from "../../utils/index.js";


import LoadingPage from "./Loading/LoadingPage.js";
import Players from "./Players/index.js";
import Header from "./Nav/Header.js";
import ResultsBar from "./Search/ResultsBar.js";
import NoPlayers from "./Players/NoPlayers.js";

import URLS from "../../utils/urls.js";


class Main extends Component {
  /* A constructor method mainly to set the state and bind handler functions */
  constructor(props) {
    super(props);
    this.state = {
      teamData: []
    };
  }

  componentDidMount() {
    //first check for valid data before loading the UI
    checkForValidPlayerData()
      .then(() => {
        //put team data in local state
        getTeamData().then(({ data }) =>
          this.setState({ teamData: data })
        );
      })
      .then(() => {
        //set the timeout for slow connections
        //like mine!
        
       
        return this.props.getAllPlayers()
      })
      .then(this.props.getFavorites());
  }


  /* 
    In the render function I'm checking to see if the state loaded yet.
    There is probably a less clunky way to do this but it is what I am familiar with!
    */

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          minHeight: "100vh",
          backgroundColor: "#5d5d5d",
          padding: "0px",
          margin: "0px 0px"
        }}
      >
        <LoadingPage status={this.props.loading} />
        <Header />
        <div
          style={{ marginTop: "50px", paddingTop: "50px" }}
          className="container-fluid"
        >
          <ResultsBar />
          <NoPlayers />
          <Players teamData={this.state.teamData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
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

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    getFavorites: () => {
      dispatch(getFavorites());
    },
    getAllPlayers: () => {
      dispatch(statPlayerSearch("", URLS.players));
      dispatch(fetchPlayersByURL());
      dispatch({ type: "UPDATE_URL", url: URLS.players });
    },
    showFavorites: () => {
      dispatch({ type: "VIEWING_FAVORITES", status: true });
      dispatch({ type: "UPDATE_LOADING" });
      dispatch(statPlayerSearch("", URLS.favorites));
      let strUrl = URLS.getSearchUrl(URLS.favorites);
      dispatch(fetchPlayersByURL(strUrl));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
