const productsInfo = (state, action) => {

  if (state === undefined) {
    return {
      products: [],
      loading: false,
      error: false
    }
  }

  switch(action.type) {
    case 'START_LOADING_PRODUCTS':
      return {
        products: [],
        loading: true,
        error: false
      }

    case 'PRODUCTS_LOADED_SUCCESSFULY':
      return {
        products: action.payload,
        loading: false,
        error: false
      }

    case 'PRODUCTS_LOAD_FAIL':
      return {
        products: [],
        loading: false,
        error: true
      }

    default:
      return state.productsInfo
  }
}

export default productsInfo