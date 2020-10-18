export function getCountries() {
    return function (dispatch) {
      return fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())
        .then((countries) =>
          dispatch({
            type: 'GET_COUNTRIES',
            payload: countries,
          })
        )
        .catch((error) => console.log(error))
    }
  }

export function getCountryDetail(name) {
  return function (dispatch) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((c) =>
         dispatch({
          type: 'GET_COUNTRY_DETAIL',
          payload: c,
        })
      )
    .catch((error) => console.log(error))
  }
}  

export function getCountriesByRegion(region){
  return function(dispatch){
    return fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    .then((res) => res.json())
    .then((c) =>
      dispatch({
          type:'GET_COUNTRIES_BY_REGION',
          payload: c
    }))
    .catch((error) => console.log(error))
  }
}