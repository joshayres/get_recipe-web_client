import React from "react";
import { connect } from "react-redux";
import { fetchRecipie } from "../actions/recipieActions";

const mapDispatchToProps = {
  fetchRecipie,
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
    this.props.fetchRecipie(this.state.search);
  }
  render() {
    return (
      <div className="search">
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
          Submit
        </button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Search);
