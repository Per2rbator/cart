import {
  startLoadingProducts,
  productsLoadedSuccessfuly,
  productsLoadFail,
  fetchProducts,
  addProductToCart,
  changeOrderProductQuantity
} from './'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([ thunk ])

describe('productsInfo synchronous action: ', () => {

  it('startLoadingProducts', () => {
    const action = {
      type: 'START_LOADING_PRODUCTS'
    }

    expect(startLoadingProducts()).toEqual(action)
  })

  it('PRODUCTS_LOADED_SUCCESSFULY', () => {
    const action = {
      type: 'PRODUCTS_LOADED_SUCCESSFULY',
      payload: [1, 2, 3]
    }

    expect(productsLoadedSuccessfuly(action.payload)).toEqual(action)
  })

  it('PRODUCTS_LOAD_FAIL', () => {
    const action = {
      type: 'PRODUCTS_LOAD_FAIL'
    }

    expect(productsLoadFail()).toEqual(action)
  })
})

describe('shoppingCart synchronous action', () => {

  it('ADD_PRODUCT_TO_CART', () => {
    const action = {
      type: 'ADD_PRODUCT_TO_CART',
      payload: { id: 1 }
    }

    expect(addProductToCart(action.payload)).toEqual(action)
  })

  it('CHANGE_PRODUCT_QUANTITY', () => {
    const action = {
      type: 'CHANGE_PRODUCT_QUANTITY',
      payload: { productId: 1, quantity: 1 }
    }

    expect(
      changeOrderProductQuantity(action.payload.productId,
                                  action.payload.quantity))
      .toEqual(action)
  })
})

describe('shoppingCart asynchronous action', () => {

  it('fetchProducts', async () => {

    const store = mockStore({
      productsInfo: {
        products: [],
        loading: false,
        error: false
      }
    })
  
    const products = [
      {
        id: 3,
        name: 'Levi\'s',
        description: 'Джинсы 501 Original Fit',
        imgURL: '/images/jeans_3.jpg',
        price: 4500
      },
      {
        id: 4,
        name: 'Levi\'s',
        description: 'Джинсы 514 Straight fit',
        imgURL: '/images/jeans_4.jpg',
        price: 7900
      }
    ]

    class MockService {
      getProducts() {
        return new Promise(resolve => resolve(products))
      }
    }
  
    const mockService = new MockService()
  
    await fetchProducts(store.dispatch, mockService)()

    expect(store.getActions().length).toEqual(2) 

    expect(store.getActions()[0]).toEqual({
      type: 'START_LOADING_PRODUCTS'
    })

    expect(store.getActions()[1]).toEqual({
      type: 'PRODUCTS_LOADED_SUCCESSFULY',
      payload: products
    })
  })
})