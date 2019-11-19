import React, { Component } from "react";
import * as Utils from "../../../utils/index.js";
import URLS from "../../../utils/urls.js";
import TeamPicker from "./TeamPicker.js";
import { FaStopCircle as Close, FaCheck as Save } from "react-icons/fa";
import {MdPersonOutline as Pos, MdSchool as College} from 'react-icons/md'

/* Editable version of the player card*/

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data }; //a copy of props user data

    //method bindings
    this.handleCollege = this.handleCollege.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.handleTeam = this.handleTeam.bind(this);
    this.handleSave = this.handleSave.bind(this);
  } //constructor

  /* Below are some handlers that handle the change within the fields
        They then save it to the card's state for later processing */

  handleTeam(tid) {
    let id = parseInt(tid);
    let name = Utils.getTeamById(id, this.props.teamData).name;
    //console.log("Team Name: ", name);
    this.setState({
      team: id,
      team_name: name
    });
  }

  handlePosition(e) {
    this.setState({ position: e.target.value });
  }

  handleCollege(e) {
    this.setState({ college: e.target.value });
  }

  //save function for the card
  //TODO: server functions here?
  handleSave() {
    this.props.toggle();
    this.props.saving();
    //get the original player data
    Utils.getSinglePlayer(this.props.data.id).then(({ data }) => {
      let obj = Object.assign(
        {},
        {
          ...data,
          position: this.state.position,
          team_name: this.state.team_name,
          team: this.state.team,
          college: this.state.college
        }
      ); //object assign
      //send the new data object in a put request
      Utils.putPlayerData(this.props.data.id, obj)
        .then(({ data }) => {
          let player = data;
          //update the card status
          this.props.updateCard(player);

          //go ahead and update if it is a favorite also
        })
        .then(() => {
          if (data.favorite === "yes") {
            Utils.putPlayerData(this.props.data.id, obj, URLS.favorites);
          }
        }); //end updating favorite also
    }); //end player query
  }

  render() {
    const { name, position, college, image, team_name, id } = this.state;
    const teamImageSplit = team_name.trim().split(" ");
    const teamImage = teamImageSplit[teamImageSplit.length - 1];

    return (
      <div
        className="card"
        style={{
          backgroundColor: "#fff",
          borderRadius: "25px",
          margin: "5px auto"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2px",
            padding: "0px 0px"
          }}
          className="card-body"
        >
          <img
            src={URLS.images + "/" + image}
            alt={name}
            style={{ width: "50%", float: "none", borderRadius: "50%" }}
          />

          <div className="input-group" style={{ width: "100%", margin: "5px 5px" }}>
         
            <TeamPicker
              data={this.props.data}
              teamImage={teamImage}
              className="form-control"
              teams={this.props.teamData}
              handleTeam={this.handleTeam}
            />
          </div>

          <div
            className="input-group"
            style={{ width: "100%", margin: "5px 5px" }}
          >
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                style={{ backgroundColor: "#00d059" }}
              >
                <Pos />
              </span>
            </div>
            <input
              className="form-control"
              type="text"
              onChange={this.handlePosition}
              placeholder={position}
            />
          </div>

          <div className="input-group" style={{ width: "100%", margin: "5px 5px" }}>
          <div className="input-group-prepend">
              <span
                className="input-group-text"
                style={{ backgroundColor: "#00d059" }}
              >
                <College />
              </span>
            </div>
            <input
              className="form-control"
              type="text"
              onChange={this.handleCollege}
              placeholder={college}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: '20%'
            }}
          >
            <Save
              style={{ width: "100%", color: "green", cursor: "pointer" }}
              onClick={this.handleSave}
              size="30"
            />

            <Close
              style={{ width: "100%", color: "red", cursor: "pointer" }}
              onClick={this.props.toggle}
              size="30"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EditCard;
