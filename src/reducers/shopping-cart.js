const shoppingCart = (state, action) => {

  if (state === undefined) {
    return JSON.parse(localStorage.getItem('shoppingCart') || '[]')
  }

  switch(action.type) {

    case 'ADD_PRODUCT_TO_CART': {
      const productData = action.payload
      const productId = action.payload.product.id
      const productIndexInCart = state.shoppingCart.findIndex(({product: { id }}) => id === productId)
      const productInCart = state.shoppingCart[productIndexInCart]
      let newProduct, shoppingCart

      if (productInCart) {
        newProduct = {...productInCart}
        newProduct.quantity += productData.quantity
        newProduct.total += productData.total

        shoppingCart = [
          ...state.shoppingCart.slice(0, productIndexInCart),
          newProduct,
          ...state.shoppingCart.slice(productIndexInCart + 1)
        ]

        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        return shoppingCart
      }

      shoppingCart = [ productData, ...state.shoppingCart ]

      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
      return shoppingCart
    }

    case 'CHANGE_PRODUCT_QUANTITY': {
      const { productId, quantity } = action.payload
      const product = state.productsInfo.products.find(product => product.id === productId)
      const productIndexInCart = state.shoppingCart.findIndex(({product: { id }}) => id === productId)
      const productInCart = state.shoppingCart.find(el => el.product.id === productId)
      let updatedProduct, shoppingCart

      if (!(productInCart.quantity + quantity)) {
        shoppingCart = state.shoppingCart.filter(el =>  el.product.id !== productId)

        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        return shoppingCart
      }

      let price = product && product.price ? product.price : productInCart.product.price
      updatedProduct = {...productInCart}
      updatedProduct.quantity += quantity
      updatedProduct.total = (productInCart.quantity + quantity) * price

      shoppingCart = [
        ...state.shoppingCart.slice(0, productIndexInCart),
        updatedProduct,
        ...state.shoppingCart.slice(productIndexInCart + 1)
      ]  

      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
      return shoppingCart
    }

    default: 
     return state.shoppingCart
  }
}

export default shoppingCart