import React from "react";
import { connect } from "react-redux";
import { fetchRecipe, search } from "../actions/recipeActions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { SearchWrap } from './SearchStyles'

const mapDispatchToProps = {
  fetchRecipe,
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
    this.props.fetchRecipe(this.state.search, 0);
  }
  render() {
    return (
      <SearchWrap>
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
      </SearchWrap>
    );
  }
}

export default connect(null, mapDispatchToProps)(Search);
