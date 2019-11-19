import React, { Component } from "react";
import URLS from "../../../utils/urls";

/* Component that displays if the Main app is loading */

class LoadingPage extends Component {
  render() {
    if (this.props.status === true) {
      return (
        <div id="screen-loader">
          <div id="loading-area">
            <div  id="page-loading" className="d-flex justify-content-center">
              <div  className="spinner-border spinner-border-xl text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default LoadingPage;
