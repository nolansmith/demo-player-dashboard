import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import * as Utils from "../../../utils/index.js";
import URLS from "../../../utils/urls.js";
import { connect } from "react-redux";

/* Header component to navigate home */
class Home extends Component {
  render() {
    return (
      <FaHome
        onClick={this.props.goHome}
        style={{ color: "#fff", cursor: "pointer" }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goHome: () => {
      dispatch({ type: "UNVIEWING_FAVORITES" });
      dispatch({ type: "UPDATE_URL", url: URLS.players });
      dispatch({ type: "UPDATE_LOADING" });
      dispatch(Utils.statPlayerSearch());
      dispatch(Utils.fetchPlayersByURL());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
