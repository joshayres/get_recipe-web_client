import React from "react";
import { connect } from "react-redux";

class Recipie extends React.Component {
  render() {
    var mappedIngredients = null;
    var mappedInstructions = null;
    var ingredients = null;
    var instructions = null;
    var image = null;
    var error = null;
    if (this.props.recipie.fetched) {
      if (this.props.recipie.recipie.ingredients) {
        mappedIngredients = this.props.recipie.recipie.ingredients.map(
          (ingredient) => <li>{ingredient}</li>
        );
        mappedInstructions = this.props.recipie.recipie.instructions.map(
          (instruction) => <li>{instruction}</li>
        );
        image = this.props.recipie.recipie.image;
        ingredients = "Ingredients";
        instructions = "Instructions";
        this.props.recipie.resultNum =
          this.props.recipie.recipie.num + this.props.recipie.resultNum;
        error = "";
      } else {
        error = "Could not find recipie. Please try searching something else";
      }
    }
    return (
      <div className="recipe">
        <h1 className="error">{error}</h1>
        <img className="image" src={image} alt="" />
        <div className="steps">
          <h1 className="title">{this.props.recipie.recipie.name}</h1>
          <div className="ingredients">
            <h2>{ingredients}</h2>
            <ul>{mappedIngredients}</ul>
          </div>
          <div className="instructions">
            <h2>{instructions}</h2>
            <ol>{mappedInstructions}</ol>
          </div>
          <footer>
            <p>
              <a href={this.props.recipie.recipie.url}>
                {this.props.recipie.recipie.url}
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    fetched: store.fetched,
    recipie: store.recipie,
  };
})(Recipie);
