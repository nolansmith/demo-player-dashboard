import React, { Component } from "react";
import URLS from "../../../utils/urls";
/* Component that displays if a card is loading/saving */

class LoadingCard extends Component {
  render() {
    return (
      <div style={{ width: "100px", margin: "0 auto" }}>
        <object
          style={{ margin: "0 auto", width: "100%", height: "50px" }}
          type="image/svg+xml"
          data={`${URLS.images}/CardLoading.svg`}
        >
          <h3>Loading...</h3>
        </object>
      </div>
    );
  }
}

export default LoadingCard;
