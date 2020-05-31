const base_url = 'http://localhost:8000/';

export function fetchRecipie(food) {
    return function (dispatch) {
        dispatch({ type: "GET_RECIPIE_START" })
        fetch(base_url + food).then(response => response.json()).then(data => {
            dispatch({ type: "GET_RECIPIE", payload: data })
        }).catch(err => {
            dispatch({ type: "GET_RECIPIE_ERROR", payload: err })
        })
    }
}