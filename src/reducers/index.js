const initialstate = {
  countries:[],
  countryDetail:{},
  countriesFiltered:[]
}

export default function rootReducer(state = initialstate, action) {
    switch (action.type) {
        
      case 'GET_COUNTRIES':
        return {
          ...state,
          countries: action.payload,
        }

      case 'GET_COUNTRY_DETAIL':
        return {
          ...state,
          countryDetail: action.payload,
        }    

      case 'GET_COUNTRIES_BY_REGION':
        return {
          ...state,
          countriesFiltered: action.payload,
          countries: ''
        }

      default:
        return state
    }
  }
  