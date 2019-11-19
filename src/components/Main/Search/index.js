import React, { Component } from "react";
import { connect } from "react-redux";
import URLS from "../../../utils/urls.js";
import * as Utils from "../../../utils/index.js";

/* Component that displays the search bar in the Header */

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.target.value.toString().trim() });
  }

  //access the state
  handleSearch() {
  
    this.props.updateUrl(URLS.players);
    this.props.playerSearch(this.state.search, this.props.url);
    
  } //handleSearch

  render() {
    return (
      <div>
        <input
          id="searchBox"
          onFocus={e => (e.target.value = "")}
          onChange={this.handleChange}
          placeholder="Search...(min 3 characters)"
        />
        <button
          style={{
            border: "0.5px solid black",
            margin: "10px",
            backgroundColor: "#00d059"
          }}
          onClick={this.handleSearch}
          type="submit"
          className="btn-info"
        >
          Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    search: state.search,
    url: state.url
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    //dispatch a player search through redux
    playerSearch: (search, url) => {
      dispatch({ type: "UPDATE_LOADING" });
      dispatch({ type: "UNVIEWING_FAVORITES" });
      dispatch(Utils.statPlayerSearch(search, URLS.players));
      let strUrl = URLS.getSearchUrl(URLS.query(URLS.players, search));
      dispatch(Utils.fetchPlayersByURL(strUrl));
    },

    updateUrl: url => {
      dispatch({ type: "UPDATE_URL", url: url });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
