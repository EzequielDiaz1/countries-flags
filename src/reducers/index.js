const initialstate = {
  countries:[]
}

export default function rootReducer(state = initialstate, action) {
    switch (action.type) {
        
      case 'GET_COUNTRIES':
        return {
          ...state,
          countries: action.payload,
        }

      default:
        return state
    }
  }
  