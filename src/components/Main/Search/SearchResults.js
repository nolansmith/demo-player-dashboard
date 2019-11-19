import React, { Component } from "react";
import URLS from "../../../utils/urls.js";
import { connect } from 'react-redux';


import {
  FaFile as Page,
  FaMale as Player,
  FaSearch as Query
} from "react-icons/fa";

/* Component that displays a fixed bar displaying search data */

class SearchResults extends Component {
  render() {
    return (
      <div
        style={{
          width: "200px",
          height: "20px",
          borderRadius: "10px",
          backgroundColor: "#009448",
          position: "fixed",
          zIndex: 13,
          bottom: 0,
          right: "auto",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
          id="sub-header"
        >
          <div>
            {" "}
            <Player style={{ color: "#fff" }} size="15" />
            {this.props.viewingFavorites ? this.props.favorites.length : this.props.count < 1 ? 0 : this.props.count}
          </div>
          <div>
            <Query style={{ color: "#fff" }} size="15" />{" "}
            {this.props.viewingFavorites ? "Favorites" : this.props.search === "" ? "All Players" : this.props.search}
          </div>

          <div>
            <Page style={{ color: "#fff" }} size="15" />
            {this.props.pages.current} / {this.props.pages.count}
          </div>
        </div>
      </div>
    );
  }
}



export default connect((state) => {
  return {
    pages: state.pages,
    viewingFavorites: state.viewingFavorites,
    search: state.search,
    players: state.players,
    count: state.count,
    favorites: state.favorites

  }
}, null)(SearchResults);
