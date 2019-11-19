import React, { Component } from "react";
import { connect } from "react-redux";
//const Card = import(/* webpackChunkName: "Card" */ "../Card/index.js");
import Card from "../Card/index.js";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import(/* webpackChunkName: "jquery" */"../../../../node_modules/jquery/dist/jquery.min.js");
import(/* webpackChunkName: "popper" */"../../../../node_modules/popper.js/dist/popper.min.js");
import(/* webpackChunkName: "bootstrap" */"../../../../node_modules/bootstrap/dist/js/bootstrap.min.js");

/* Component that displays the players being requested */

class Players extends Component {
  render() {
    return (
      <div className="row" style={{ width: "80%", margin: "0 auto" }}>
        {this.props.players.map((player, index) => {
          return (
            <Card
              teamData={this.props.teamData}
              data={player}
              key={index + "" + player.name}
            />
          );
        }) //map
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
