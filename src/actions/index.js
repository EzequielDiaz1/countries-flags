export function getProducts() {
    return function (dispatch) {
      return fetch('http://localhost:3002/products', {
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((products) =>
          dispatch({
            type: 'GET_PRODUCTS',
            payload: products,
          })
        )
        .catch((error) => console.log(error))
    }
  }