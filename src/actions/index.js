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