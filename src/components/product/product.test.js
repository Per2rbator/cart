import React from 'react'
import { shallow } from 'enzyme'
import Product from './'

describe('Product:', () => {

  const props = {
    id: 1,
    name: 'Levi\'s',
    description: 'Джинсы 501 Original Fit',
    imgURL: '/images/jeans_1.jpg',
    price: 7900,
    onProductAdded: () => {}
  }

  const productWrapper = shallow(<Product { ...props } />)

  it('should correctly renders with props', () => {
    expect(productWrapper.find('.product__image').prop('src')).toEqual(props.imgURL)
    expect(productWrapper.find('.product__name').text()).toEqual(props.name)
    expect(productWrapper.find('.product__additional').text()).toEqual(props.description)
    expect(productWrapper.find('.product__price').text()).toContain(props.price)
  })
}) 