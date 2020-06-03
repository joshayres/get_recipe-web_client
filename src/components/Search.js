import React from "react";
import { connect } from "react-redux";
import { fetchRecipie, search } from "../actions/recipieActions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const mapDispatchToProps = {
  fetchRecipie,
  search,
};

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  updateSearch(event) {
    var string = event.target.value.replace(" ", "+");
    this.setState({ search: string });
  }
  handleClick(e) {
    e.preventDefault();
    this.props.search(this.state.search);
    this.props.fetchRecipie(this.state.search, 0);
  }
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleClick.bind(this)}>
          <input
            className="search-bar"
            type="text"
            onChange={this.updateSearch.bind(this)}
          />
          <button
            className="search-button"
            type="button"
            onClick={this.handleClick.bind(this)}
          >
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Search);
