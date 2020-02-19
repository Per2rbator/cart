import React from 'react'
import { shallow } from 'enzyme'
import AddForm from './'

describe('AddForm:', () => {
  const props = {
    product: {
      id: 1,
      name: 'Levi\'s',
      description: 'Джинсы 501 Original Fit',
      imgURL: '/images/jeans_1.jpg',
      price: 7900
    },
    quantity: 1,
    total: 7900,
    onClose: () => {},
    onIncrease: () => {},
    onDecrease: () => {},
    onAddToCart: () => {}
  }

  const addFormWrapper = shallow(<AddForm { ...props } />)

  it('should correctly renders with props', () => {
    expect(addFormWrapper.find('.add-form__product-image').prop('src'))
      .toEqual(props.product.imgURL)

    expect(addFormWrapper.find('.add-from__product-name').text())
      .toEqual(props.product.name)

    expect(addFormWrapper.find('.add-from__product-details').text())
      .toEqual(props.product.description)

    expect(addFormWrapper.find('.add-from__quantity-value').text())
      .toEqual(props.quantity.toString())
      
    expect(addFormWrapper.find('.add-from__total').text())
      .toContain(props.total.toString())
  })
})