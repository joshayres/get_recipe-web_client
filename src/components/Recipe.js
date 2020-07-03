import React from "react";
import { RecipeWrap } from "./RecipeStyles";
import { connect } from "react-redux";
import Spinner from "react-spinkit";

class Recipe extends React.Component {
  render() {
    var mappedIngredients = null;
    var mappedInstructions = null;
    var ingredients = null;
    var instructions = null;
    var image = null;
    var error = null;
    if (this.props.recipe.fetched) {
      if (this.props.recipe.recipe.ingredients) {
        mappedIngredients = this.props.recipe.recipe.ingredients.map(
          (ingredient) => <li>{ingredient}</li>
        );
        mappedInstructions = this.props.recipe.recipe.instructions.map(
          (instruction) => <li>{instruction}</li>
        );
        image = this.props.recipe.recipe.image;
        ingredients = "Ingredients";
        instructions = "Instructions";
        this.props.recipe.resultNum =
          this.props.recipe.recipe.num + this.props.recipe.resultNum;
        error = "";
      } else {
        error = "Could not find recipe. Please try searching something else";
      }
    }
    return (
      <RecipeWrap>
        <h1 className="error">{error}</h1>
        <img className="image" src={image} alt="" />
        {this.props.recipe.fetching ? (
          <Spinner name="chasing-dots" color="#039be5" />
        ) : (
          <div className="steps">
            <h1 className="title">{this.props.recipe.recipe.name}</h1>
            <div className="ingredients">
              <h2>{ingredients}</h2>
              <ul>{mappedIngredients}</ul>
            </div>
            <div className="instructions">
              <h2>{instructions}</h2>
              <ol>{mappedInstructions}</ol>
            </div>
            <a href={this.props.recipe.recipe.url}>
              {this.props.recipe.recipe.url}
            </a>
         </div>
        )}
      </RecipeWrap>
    );
  }
}

export default connect((store) => {
  return {
    fetching: store.fetching,
    fetched: store.fetched,
    recipe: store.recipe,
  };
})(Recipe);
