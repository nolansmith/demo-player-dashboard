import React, { Component } from "react";
import { FaRegStar, FaStar, FaEdit } from "react-icons/fa";
import LoadingCard from "../Loading/LoadingCard.js";
import { connect } from "react-redux";
import URLS from "../../../utils/urls.js";
import * as Utils from "../../../utils/index.js";

/* Regular shown body of a player card*/
class RegularCard extends Component {
  constructor(props) {
    super(props);

    this.getStar = this.getStar.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.state = {
      data: {...this.props.data}
    }
  }

  //method to drag data into the event
  handleDragStart(e) {
    //if we are not viewing favorites, we don't need to be dragging

    if (!this.props.viewingFavorites) return;

    let playerIndex = this.props.players.findIndex((p, index) => {
      return p.id === this.props.data.id;
    });

    let card = {
      index: playerIndex,
      data: { ...this.props.data }
    };
    //console.log(card);
    e.dataTransfer.setData("card", JSON.stringify(card));
  }

  //handle the dropping of the card
  handleDrop(e, player) {
    if (!this.props.viewingFavorites) return;
    let players = [...this.props.players];

    let movedPlayer = JSON.parse(e.dataTransfer.getData("card"));
    //splice the original index
    let index = players.findIndex(p => {
      return p.id === player.id;
    });
    //remove the player being dragged
    players.splice(movedPlayer.index, 1);
    //add the player being dragged in the index of the other player
    players.splice(index, 0, movedPlayer.data);
    //reorder the favorites
    this.props.orderFavorites(players);
  }
  //get the style of the star whether it is a favorite or not
  getStar(style) {
    return this.props.isFavorite ? (
      <FaStar onClick={this.props.handleFavorite} style={style} size="30" />
    ) : (
      <FaRegStar onClick={this.props.handleFavorite} style={style} size="30" />
    );
  }
  render() {
    const {
      name,
      position,
      college,
      image,
      team_name,
      favorite,
      id
    } = this.props.data;

    const favStyle = {
      color: "#FFD700",
      cursor: "pointer",
      width: "100%"
    };
    const regStyle = { color: "#000", cursor: "pointer", width: "100%" };
    const starStyle = this.props.isFavorite ? favStyle : regStyle;

    //simple method to remove spaces and format the position into initials
    const removeSpaces = str => {
      let split = str.split(" ");
      return split.length > 1
        ? split[0].substr(0, 1) + "" + split[1].substr(0, 1)
        : str.substr(0, 1);
    };

    //some players have multiple positions
    //ex: Forward-Center would become F/C
    const removeHyphen = str => {
      let split = str.split("-");
      return split.length > 1
        ? removeSpaces(split[0]).toUpperCase() +
            "/" +
            removeSpaces(split[1]).toUpperCase()
        : removeSpaces(str).toUpperCase();
    };

    //the image for each team is the last part of the name
    //ex: Atlanta Hawks would be Hawks.svg
    const teamImageSplit = (team_name) ? team_name.trim().split(" ") : ["Atlanta", "Hawks"];
    const teamImage = teamImageSplit[teamImageSplit.length - 1];

    return (
      <div
        className="card"
        draggable
        droppable="true"
        onDrop={e => this.handleDrop(e, this.props.data)}
        onDragStart={this.handleDragStart}
        onDragOver={e => {
          e.preventDefault();
        }}
        style={{
          border: "none",
          display: "flex",
          flexDirection: "column",
          borderRadius: "25px",
          margin: "5px auto",
          cursor: this.props.viewingFavorites ? "move" : "auto"
        }}
      >
        <div>
          <img
            src={`${URLS.images}/teams/${teamImage}.svg`}
            style={{
              float: "right",
              width: "50px",
              height: "50px",
              margin: "5px 5px 0px 5px"
            }}
          />
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            width: "100%",
            margin: "10px auto",
            borderRadius: "10%"
          }}
        >
          <img
            src={`${URLS.images}/${image}`}
            style={{ width: "100%", borderRadius: "20%" }}
            alt={name}
          />
        </div>
        {this.props.isLoading ? (
          <LoadingCard />
        ) : (
          <div className="card-body" style={{ padding: "5px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2px"
              }}
            >
              <div>
                <p className="player-name">{name}</p>
              </div>
              <div>
                <p
                  className="player-text"
                  style={{
                    margin: "0 auto",
                    float: "none",
                    textAlign: "center"
                  }}
                >
                  {removeHyphen(position)} | {college}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%"
                }}
              >
                <div>{this.getStar(starStyle)}</div>

                <div>
                  {" "}
                  <FaEdit
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={this.props.toggle}
                    size="30"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    viewingFavorites: state.viewingFavorites,
    pages: state.pages,
    players: state.players
  };
};

const mapDispatchToProps = dispatch => {
  return {
    orderFavorites: players => {
      dispatch({ type: "GET_PLAYERS_BY_URL", players: players });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegularCard);

/*

 

            
*/
