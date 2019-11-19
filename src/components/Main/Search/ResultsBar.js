import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResults from "./SearchResults";
import URLS from "../../../utils/urls.js";
import * as Utils from "../../../utils/index.js";
import {
  FaChevronCircleRight as Right,
  FaChevronCircleLeft as Left
} from "react-icons/fa";

/* Component that displays next/prev arrows */

class ResultsBar extends Component {
  constructor(props) {
    super(props);

    //just a bunch of bindings
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.getNextArrow = this.getNextArrow.bind(this);
    this.getPrevArrow = this.getPrevArrow.bind(this);
    this.showArrows = this.showArrows.bind(this);
  }

  /* methods to display the next/previous arrows! */
  getPrevArrow() {
    if (this.props.pages.current > 1)
      return (
        <h1>
          <Left
            size="40"
            style={{
              position: "fixed",
              left: "2%",
              top: "50%",
              color: "#00e771",
              cursor: 'pointer'
            }}
            href="#"
            onClick={this.handlePrev}
          />
        </h1>
      );
  }

  getNextArrow() {
    if (this.props.pages.current < this.props.pages.count)
      return (
        <h1>
          <Right
            size="40"
            style={{
              position: "fixed",
              right: "2%",
              top: "50%",
              color: "#00e771",
              cursor: 'pointer'
            }}
            href="#"
            onClick={this.handleNext}
          />
        </h1>
      );
  }

  showArrows() {
    return (
      <div>
        {this.getPrevArrow()} &nbsp;&nbsp;&nbsp; {this.getNextArrow()}
      </div>
    );
  }

  handlePrev() {
    this.props.setCurrentPage(this.props.pages.current - 1);
    let url = URLS.getSearchUrl(
      URLS.query(this.props.url, this.props.search),
      this.props.pages.current - 1
    );
    this.props.updatePlayerView(url);
  }

  

  handleNext() {
    this.props.setCurrentPage(this.props.pages.current + 1);
    let url = URLS.getSearchUrl(
      URLS.query(this.props.url, this.props.search),
      this.props.pages.current + 1
    );
    //console.log(url);
    this.props.updatePlayerView(url);
  }
  render() {
    return (
      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {" "}
        {this.getPrevArrow()}
        <SearchResults
        />
        {this.getNextArrow()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search,
    pages: state.pages,
    favorites: state.favorites,
    viewingFavorites: state.viewingFavorites,
    count: state.count,
    url: state.url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePlayerView: url => {
      dispatch({ type: "UPDATE_LOADING" });
      dispatch(Utils.fetchPlayersByURL(url));
    },
    showFavorites: () => {
      dispatch({ type: "VIEWING_FAVORITES", status: true });
      dispatch({ type: "UPDATE_LOADING" });
      dispatch(Utils.statPlayerSearch("", URLS.favorites));
      let strUrl = URLS.getSearchUrl(URLS.favorites);
      dispatch(Utils.fetchPlayersByURL(strUrl));
    },

    setCurrentPage: page => dispatch({ type: "SET_CURRENT_PAGE", page: page })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsBar);
