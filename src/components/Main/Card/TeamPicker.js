import React, { Component } from "react";
import { connect } from "react-redux";
import URLS from "../../../utils/urls.js";
var $ = require("jquery");
import * as Utils from "../../../utils/index.js";


/* Component to pick a player's team when editing */

class TeamPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };

    this.handleTeam = this.handleTeam.bind(this);
  }

  handleTeam(e) {
    let id = $(e.target).data("team-id"); //passed from data-team-id
    let name = Utils.getTeamById(id, this.props.teams).name; //get the name of the team

    this.setState({
      team: id,
      team_name: name
    });

    this.props.handleTeam(id);
  }
  render() {
    const teamImageSplit = this.state.team_name.trim().split(" ");
    const teamImage = teamImageSplit[teamImageSplit.length - 1];
    return (
      <div style={{ width: "100%" }} className="dropdown input-group">
        <button
          className="dropdown-toggle form-control "
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ width: "100%" }}
        >
          <img
            onClick={this.handleTeam}
            data-team-id={this.props.data.team}
            style={{ width: "25px", height: "25px" }}
            src={`${URLS.images}/teams/${teamImage}.svg`}
          />{" "}
          {teamImage}
        </button>
        <div
          className="dropdown-menu"
          style={{ width: "100%", height: "200px", overflowY: "scroll" }}
        >
          <ul style={{ padding: "0px 0px" }}>
            <li
              className="dropdown-item"
              style={{ padding: "0px 0px", width: "100%", cursor: "pointer" }}
              key={this.props.team_name + "" + this.props.name}
            >
              <img
                onClick={this.handleTeam}
                data-team-id={this.props.data.team}
                style={{ width: "25px", height: "25px", margin: "1px auto" }}
                src={`${URLS.images}/teams/${teamImage}.svg`}
              />
              {teamImage}
            </li>

            {this.props.teams.map((team, index) => {
              let tSplit = team.name.trim().split(" ");
              let tImage = tSplit[tSplit.length - 1];
              if (team.name === this.state.team_name) return;
              return (
                <li
                  className="dropdown-item"
                  style={{
                    padding: "0px 0px",
                    width: "100%",
                    cursor: "pointer"
                  }}
                  key={team + "" + index}
                  onClick={this.handleTeam}
                  data-team-id={team.id}
                >
                  <img
                    onClick={this.handleTeam}
                    data-team-id={team.id}
                    style={{
                      width: "25px",
                      height: "25px"
                    }}
                    src={`${URLS.images}/teams/${tImage}.svg`}
                  />
                  {tImage}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamPicker);
