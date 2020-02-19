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

const fetchProducts = (dispatch, service) => () => {
  dispatch(startLoadingProducts())
  service.getProducts()
    .then(products => dispatch(productsLoadedSuccessfuly(products)))
    .catch(error => dispatch(productsLoadFail()))
}

const addProductToCart = productData => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: productData
})

const changeOrderProductQuantity = (productId, quantity) => ({
  type: 'CHANGE_PRODUCT_QUANTITY',
  payload: { productId, quantity }
})

export {
  startLoadingProducts,
  productsLoadedSuccessfuly,
  productsLoadFail,
  fetchProducts,
  addProductToCart,
  changeOrderProductQuantity
}
