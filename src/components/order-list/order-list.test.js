import React from 'react'
import { shallow } from 'enzyme'
import { OrderList } from './order-list'

describe('OrderList: ', () => {

  it('should correctly renders without data', () => {
    const props = {
      orderItems: [],
      changeQuantity: () => {}
    }

    const orderListWrapper = shallow(<OrderList { ...props } />)

    expect(orderListWrapper.exists('.order-list')).toBeTruthy()
    expect(orderListWrapper.exists('.order-list__order-item')).toBeFalsy()
    expect(orderListWrapper.exists('.order-list__total')).toBeFalsy()
  })
  
  it('should correctly renders with data', () => {
    const props = {
      orderItems: [
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
      ],
      changeQuantity: () => {}
    }

    const orderListWrapper = shallow(<OrderList { ...props } />)
    
    expect(orderListWrapper.find('.order-item__image').prop('src'))
      .toEqual(props.orderItems[0].product.imgURL)

    expect(orderListWrapper.find('.order-item__name').text())
      .toEqual(props.orderItems[0].product.name)

    expect(orderListWrapper.find('.order-item__description').text())
      .toEqual(props.orderItems[0].product.description)

    expect(orderListWrapper.find('.order-item__in-cart').text())
      .toContain(props.orderItems[0].quantity.toString())

    expect(orderListWrapper.find('.order-item__in-total').text())
      .toContain(props.orderItems[0].total.toString())

    expect(orderListWrapper.find('.order-list__total-value').text())
      .toContain(props.orderItems[0].total.toString())
  })

  it('should returns 2 product in layout and correct totalPrice value with 2 products', () => {
    const props = {
      orderItems: [
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
        },
        {
          product: {
            id: 2,
            name: 'Levi\'s',
            description: 'Джинсы 501 Original Fit',
            imgURL: '/images/jeans_1.jpg',
            price: 7900
          },
          quantity: 1,
          total: 7900
        }
      ],
      changeQuantity: () => {}
    }

    const twoProductsAmount = props.orderItems[0].product.price * 2
    const orderListWrapper = shallow(<OrderList { ...props } />)

    expect(orderListWrapper.find('.order-list__order-item').length).toEqual(2)
    expect(orderListWrapper.find('.order-list__total-value').text())
      .toContain(twoProductsAmount.toString())
  })
})
