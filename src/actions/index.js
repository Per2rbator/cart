const startLoadingProducts = () => ({
  type: 'START_LOADING_PRODUCTS'
})

const productsLoadedSuccessfuly = products => ({
  type: 'PRODUCTS_LOADED_SUCCESSFULY',
  payload: products
})

const productsLoadFail = () => ({
  type: 'PRODUCTS_LOAD_FAIL'
})

const fetchProducts = (dispatch, service) => {
  dispatch(startLoadingProducts())
  service.getProducts()
    .then(products => dispatch(productsLoadedSuccessfuly(products)))
    .catch(error => dispatch(productsLoadFail()))
}

export {
  startLoadingProducts,
  productsLoadedSuccessfuly,
  productsLoadFail,
  fetchProducts
}
