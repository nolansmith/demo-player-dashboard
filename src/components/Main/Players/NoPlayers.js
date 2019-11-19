import React, { Component } from "react";
import { connect } from "react-redux";
import { FaRegSadTear as OhNo } from "react-icons/fa";
/* If there are no players currently loaded, this will show */

class NoPlayers extends Component {
  render() {
    return this.props.players.length === 0 ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          flexDirection: "column",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh"
        }}
      >
        <h1
          style={{
            fontFamily: "Flama-Bold, sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff"
          }}
        >
          No Results
        </h1>
        <OhNo style={{ color: "#fff" }} size="100" />
      </div>
    ) : null;
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
)(NoPlayers);
