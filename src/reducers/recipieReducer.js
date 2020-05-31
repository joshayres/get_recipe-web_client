const initialState = {
  fetching: false,
  fetched: false,
  recipie: {},
  error: null,
}

export default function reducer(state=initialState, action) {
  switch (action.type){
    case "GET_RECIPIE_START": {
      return {
        ...state,
        fetching: true
      }
    }
    case "GET_RECIPIE": {
      return {...state, fetching:false, fetched:true, recipie:action.payload}
    }
    case "GET_RECIPIE_ERROR": {
      return {...state, fetching:false, error:action.payload}
    }
    default: {
      return state
    }
  }
}