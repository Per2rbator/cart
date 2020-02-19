import productsInfo from './products-info'
import shoppingCart from './shopping-cart'

describe('productsInfo reducer', () => {

  const initialState = {
    products: [],
    loading: false,
    error: false
  }

  it('should return default state', () => {
    expect(productsInfo()).toEqual(initialState)
  })

  it('START_LOADING_PRODUCTS', () => {
    const action = {
      type: 'START_LOADING_PRODUCTS'
    }

    expect(productsInfo(initialState, action)).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('PRODUCTS_LOADED_SUCCESSFULY', () => {
    const stateBefore = {
      ...initialState,
      loading: true
    }

    const action = {
      type: 'PRODUCTS_LOADED_SUCCESSFULY',
      payload: [1, 2]
    }

    expect(productsInfo(stateBefore, action)).toEqual({
      ...initialState,
      products: action.payload
    })
  })

  it('PRODUCTS_LOAD_FAIL', () => {
    const stateBefore = {
      ...initialState,
      loading: true
    }

    const action = {
      type: 'PRODUCTS_LOAD_FAIL'
    }

    expect(productsInfo(stateBefore, action)).toEqual({
      ...initialState,
      error: true
    })
  })
})

describe('shoppingCart reducer', () => {
  const initialState = []

  it('should return default state', () => {
    expect(shoppingCart()).toEqual(initialState)
  })

  it('ADD_PRODUCT_TO_CART', () => {
    const initialState = {
      shoppingCart: []
    }

    const action = {
      type: 'ADD_PRODUCT_TO_CART',
      payload: {
        product: {
          id: 1,
          name: 'Levi\'s',
          description: 'Джинсы 501 Original Fit',
          imgURL: '/images/jeans_1.jpg',
          price: 7900
        },
        quantity: 1,
        total: 7900
      }
    }
    expect(shoppingCart(initialState, action)).toEqual([
      {
        ...action.payload
      }
    ])
  })

  it('CHANGE_PRODUCT_QUANTITY', () => {
    const initialState = {
      productsInfo: {
        products: [],
        loading: false,
        error: false
      },
      shoppingCart: [
        {
          product: {
            id: 1,
            name: 'Levi\'s',
            description: 'Джинсы 501 Original Fit',
            imgURL: '/images/jeans_1.jpg',
            price: 7900
          },
          quantity: 1,
          total: 7900
        }
      ]
    }

    const action = {
      type: 'CHANGE_PRODUCT_QUANTITY',
      payload: { productId: 1, quantity: 1}
    }

    expect(shoppingCart(initialState, action)).toEqual([
      {
        ...initialState.shoppingCart[0],
        quantity: 2,
        total: 15800
      }
    ])
  })
})