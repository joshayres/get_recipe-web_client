import React from "react";
import { search, fetchRecipe } from "../actions/recipeActions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NextWrap } from "./NextStyles";

function mapStateToProps(state) {
  return {
    recipe: state.recipe,
  };
}

const mapDispatchToProps = {
  fetchRecipe,
  search,
};

class Next extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log(this.props.recipe.resultNum);
    this.props.fetchRecipe(
      this.props.recipe.search,
      this.props.recipe.resultNum
    );
  }
  render() {
    return (
      <NextWrap>
        <button className="nextButton" onClick={this.handleClick.bind(this)}>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        </button>
      </NextWrap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);
