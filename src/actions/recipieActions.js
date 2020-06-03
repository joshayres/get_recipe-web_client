const base_url = "http://192.168.68.56:8000/";

export function fetchRecipie(food, num) {
  return function (dispatch) {
    dispatch({ type: "GET_RECIPIE_START" });
    fetch(base_url + food + "/" + num)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_RECIPIE", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "GET_RECIPIE_ERROR", payload: err });
      });
  };
}

export function search(name) {
  return function (dispatch) {
    dispatch({ type: "SEARCH_RECIPE", payload: name });
  };
}
