const productsInfo = (state, action) => {

  if (state === undefined) {
    let productsInfo = {
      products: [],
      loading: false,
      error: false
    }
    
    return JSON.parse(localStorage.getItem('productsInfo') || JSON.stringify(productsInfo))
  }

  switch(action.type) {
    case 'START_LOADING_PRODUCTS': {
      let productsInfo = {
        products: [],
        loading: true,
        error: false
      }

      localStorage.setItem('productsInfo', productsInfo)
      return productsInfo
    }
      
    case 'PRODUCTS_LOADED_SUCCESSFULY': {
      let productsInfo = {
        products: action.payload,
        loading: false,
        error: false
      }
      
      localStorage.setItem('productsInfo', JSON.stringify(productsInfo))
      return productsInfo
    }

    case 'PRODUCTS_LOAD_FAIL': {
      let productsInfo = {
        products: [],
        loading: false,
        error: true
      }

      localStorage.setItem('productsInfo', productsInfo)
      return productsInfo
    }

    default:
      return state.productsInfo
  }
}

export default productsInfo