import React, { Component } from "react";
import { FaThumbsUp } from "react-icons/fa";
import * as Utils from "../../../utils/index.js";
import { connect } from "react-redux";
import URLS from "../../../utils/urls.js";
import Badge from "react-notification-badge";
import { Effect } from "react-notification-badge";

/* Component displayed on the right side of navigation */

class FavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: this.props.favorites
    };
  }

  render() {
    return (
      <React.Fragment>
        <FaThumbsUp
          onClick={this.props.showFavorites}
          style={{ color: "#fff", cursor: "pointer" }}
        />
        <Badge count={this.props.favorites.length} effect={Effect.SCALE} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    viewingFavorites: state.viewingFavorites,
    pages: state.pages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showFavorites: () => {
      dispatch({ type: "VIEWING_FAVORITES", status: true });
      dispatch({ type: "UPDATE_LOADING" });
      //update URL
      dispatch({ type: "UPDATE_URL", url: URLS.favorites });
      //set search to '', but display 'favorites'
      dispatch({ type: "CLEAR_SEARCH" });
      //stat players from server
      dispatch(Utils.statPlayerSearch("", URLS.favorites));
      //actually place the players into the view
      dispatch(Utils.fetchPlayersByURL(URLS.favorites));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavBar);
