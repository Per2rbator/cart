import productsInfo from './products-info'
// import shoppingCart from './shopping-cart'

const reducer = (state, action) => ({
  productsInfo: productsInfo(state, action),
  // shoppingCart: shoppingCart(state, action)
})

export default reducer