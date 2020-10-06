const initialstate = {}

export default function rootReducer(state = initialstate, action) {
    switch (action.type) {
        
      case 'GET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        }

      default:
        return state
    }
  }
  