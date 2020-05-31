import React from "react";
import { connect } from "react-redux";

class Recipie extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    var mappedIngredients = null;
    var mappedInstructions = null;
    var image = null;
    var error = null;
    if (this.props.recipie.fetched) {
      if (this.props.recipie.recipie.ingredients){
        mappedIngredients = this.props.recipie.recipie.ingredients.map(
          (ingredient) => <li>{ingredient}</li>
        );
        mappedInstructions = this.props.recipie.recipie.instructions.map(
          (instruction) => <li>{instruction}</li>
        );
        image = this.props.recipie.recipie.image;
        error = '';
      } else {
        error = "Could not find recipie. Please try searching something else";
      }
    }
    return (
      <div className="recipie">
        <h1 className="title">{this.props.recipie.recipie.name}</h1>
        <h1 className="error">{error}</h1>
        <div className="flex">
          <img className="image" src={image} alt="" />
          <div className="steps">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <ul>{mappedIngredients}</ul>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <ol>{mappedInstructions}</ol>
            </div>
          </div>
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
