import React, { Component } from "react";
import RegularCard from "./RegularCard.js";
import EditCard from "./EditCard.js";
import * as Utils from "../../../utils/index.js";
import URLS from "../../../utils/urls.js";
import { connect } from "react-redux";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      isFavorite: this.props.data.favorite === "yes" ? true : false,
      data: { ...this.props.data },
      loading: false,
      saving: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.saving = this.saving.bind(this);
    this.render = this.render.bind(this);
  }
  //toggles the state of the card (edited/normal)
  toggle() {
    let editing = !this.state.editing;
    this.setState({ editing: editing });
  }
  //changes the UI state of favorite
  //then changes on the back end
  handleFavorite() {
    let newFavoriteStatus = this.state.data.favorite === "yes" ? "no" : "yes";
    //console.log('New favorite status: ', newFavoriteStatus);
    this.setState({
      isFavorite: !this.state.isFavorite,
      data: { ...this.state.data, favorite: newFavoriteStatus }
    });

    //console.log('Updating player data...');
    Utils.putPlayerData(this.props.data.id, {
      ...this.state.data,
      favorite: newFavoriteStatus
    }).then(({ data }) => {
      //console.log('Return data: ', data);
      //perform the favorite operation
      if (newFavoriteStatus === "yes") {
        this.props.addFavorite(data);
      } else {
        this.props.delFavorite(data);
      }
      if (this.props.viewingFavorites === true) {
        setTimeout(this.props.showFavorites, 1000);
      }
    });
  }

  //update the card function
  updateCard(state) {
    this.setState({ data: state }, this.saving);
    this.forceUpdate();
  }

  //toggle the save status
  saving() {
    this.setState({ saving: !this.state.saving });
  }

  render() {
    return (
      //if we are in a state of editing, show the editable body
      !this.state.editing ? (
        <RegularCard
          toggle={this.toggle}
          data={this.state.data}
          handleFavorite={this.handleFavorite}
          isFavorite={this.state.isFavorite}
          isLoading={this.state.saving}
          card={this}
        />
      ) : (
        <EditCard
          data={this.state.data}
          teamData={this.props.teamData}
          toggle={this.toggle}
          updateCard={this.updateCard}
          saving={this.saving}
          card={this}
        />
      )
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
    addFavorite: player => dispatch(Utils.createFavorite(player)),
    delFavorite: player => dispatch(Utils.removeFavorite(player)),
    showFavorites: () => {
      dispatch({ type: "VIEWING_FAVORITES", status: true });
      dispatch({ type: "UPDATE_LOADING" });
      //update URL
      //update search
      dispatch({ type: "UPDATE_URL", url: URLS.favorites });
      dispatch({ type: "CLEAR_SEARCH" });
      dispatch(Utils.statPlayerSearch("", URLS.favorites));
      //let strUrl = URLS.getSearchUrl(URLS.query(URLS.favorites));
      dispatch(Utils.fetchPlayersByURL(URLS.favorites));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

/* 
  <div style={{ ...styles.container, ...props.style }}>
            <div style={styles.name}>{name}</div>
            <img src={image}
            style={styles.playerImage} 
            alt="player_image" />

            <div>{team}</div>
        </div>
*/
