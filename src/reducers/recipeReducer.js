const initialState = {
  fetching: false,
  fetched: false,
  recipe: {},
  search: '',
  resultNum: 0,
  error: null,
}

export default function reducer(state=initialState, action) {
  switch (action.type){
    case "GET_RECIPE_START": {
      return {
        ...state,
        fetching: true
      }
    }
    case "GET_RECIPE": {
      return {...state, fetching:false, fetched:true, recipe:action.payload}
    }
    case "GET_RECIPE_ERROR": {
      return {...state, fetching:false, error:action.payload}
    }
    case "SEARCH_RECIPE": {
      return {...state, search: action.payload}
    }
    default: {
      return state
    }
  }
}