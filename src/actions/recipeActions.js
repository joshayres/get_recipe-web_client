const base_url = "/api/";

export function fetchRecipe(food, num) {
  return function (dispatch) {
    dispatch({ type: "GET_RECIPE_START" });
    fetch(base_url + food + "/" + num)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_RECIPE", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "GET_RECIPE_ERROR", payload: err });
      });
  };
}

export function search(name) {
  return function (dispatch) {
    dispatch({ type: "SEARCH_RECIPE", payload: name });
  };
}
