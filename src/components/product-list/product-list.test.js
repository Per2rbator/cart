import React from 'react'
import { shallow } from 'enzyme'
import { ProductList } from './product-list'

describe('ProductList: ', () => {

  const mockFetchProducts = jest.fn()

  const initialProps = {
    products: [],
    loading: false,
    error: false,
    fetchProducts:  mockFetchProducts(),
    addProductToCart: () => {}
  }

  
  it('should correctly render ProductList', () => {
    const productListContainer = shallow(<ProductList { ...initialProps } />)
    expect(productListContainer.find('.product-list').length).toBe(1)
  })

  it('should render Loader', () => {
    const loaderProps = {
      ...initialProps,
      loading: true
    }

    const productListContainer = shallow(<ProductList { ...loaderProps } />)
    expect(productListContainer.find('Loader').length).toBe(1)
  })

  it('should dispath mockFetchProducts', () => {
    expect(mockFetchProducts).toHaveBeenCalled()
    expect(mockFetchProducts).toHaveBeenCalledTimes(1)
  })

  it('should correctly render product items', () => {
    const productsProps = {
      ...initialProps,
      products: [
        {
          id: 1,
          name: 'Levi\'s',
          description: 'Джинсы 501 Original Fit',
          imgURL: '/images/jeans_1.jpg',
          price: 7900
        },
        {
          id: 1,
          name: 'Levi\'s',
          description: 'Джинсы 501 Original Fit',
          imgURL: '/images/jeans_1.jpg',
          price: 7900
        }
      ]
    }

    const productListWrapper = shallow(<ProductList { ...productsProps } />)
    expect(productListWrapper.find('Product').length).toBe(2)
  })
})