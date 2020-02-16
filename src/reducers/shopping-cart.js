const shoppingCart = (state, action) => {

  if (state === undefined) return []

  switch(action.type) {

    case 'ADD_PRODUCT_TO_CART': {
      const productData = action.payload
      const productId = action.payload.product.id
      const productIndexInCart = state.shoppingCart.findIndex(({product: { id }}) => id === productId)
      const productInCart = state.shoppingCart[productIndexInCart]
      let newProduct

      if (productInCart) {
        newProduct = {...productInCart}
        newProduct.quantity += productData.quantity
        newProduct.total += productData.total

        return [
          ...state.shoppingCart.slice(0, productIndexInCart),
          newProduct,
          ...state.shoppingCart.slice(productIndexInCart + 1)
        ]
      }

      return [ productData, ...state.shoppingCart ]
    }

    case 'CHANGE_PRODUCT_QUANTITY': {
      const { productId, quantity } = action.payload
      const product = state.productsInfo.products.find(product => product.id === productId)
      const productIndexInCart = state.shoppingCart.findIndex(({product: { id }}) => id === productId)
      const productInCart = state.shoppingCart.find(el => el.product.id === productId)
      let updatedProduct

      if (!(productInCart.quantity + quantity)) {

        return state.shoppingCart.filter(el =>  el.product.id !== productId)
      }

      updatedProduct = {...productInCart}
      updatedProduct.quantity += quantity
      updatedProduct.total = (productInCart.quantity + quantity) * product.price

      return [
        ...state.shoppingCart.slice(0, productIndexInCart),
        updatedProduct,
        ...state.shoppingCart.slice(productIndexInCart + 1)
      ]
    }

    default: 
     return state.shoppingCart
  }
}

export default shoppingCart