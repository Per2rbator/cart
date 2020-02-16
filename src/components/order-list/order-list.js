import React from 'react'
import { connect } from 'react-redux'
import { changeOrderProductQuantity } from '../../actions'

import './order-list.css'

const OrderList = ({ orderItems, changeQuantity }) => {

  console.log(orderItems)

  const orderList = orderItems.length ? orderItems.map((item, idx) => (
    <li className="order-list__order-item" key={ idx }>
      <div className="order-item__image-wrapper">
        <img className="order-item__image" src={item.product.imgURL} alt=""/>
      </div>
      <div>
        <p className="order-item__name">{ item.product.name }</p>
        <p className="order-item__description">{ item.product.description }</p>
        <p className="order-item__in-cart">Quantity: { item.quantity }</p>
        <p className="order-item__in-total">Total: { item.total }</p>
        <div className="order-item__controls">
          <i
            className="material-icons order-item__add"
            onClick={() => changeQuantity(item.product.id, 1)} >
              add
          </i>
          <i
            className="material-icons order-item__remove"
            onClick={() => changeQuantity(item.product.id, -1)} >
              remove
          </i>
          <i
            className="material-icons order-item__delete"
            onClick={() => changeQuantity(item.product.id, -item.quantity)} >
              delete
          </i>
        </div>
      </div>
    </li>
  )) : null

  let total = () => {
    if (orderItems.length) {
      const total = orderItems.reduce((total, item) => item.total + total, 0)

      return (
        <div className="order-list__total">
          Итого: <span className="order-list__total-value">{ total } &#8381;</span>
        </div>
      )
    }

    return null
  }

  return (
    <div className="order-list">
      <p className="order-list__heading">
        Cart
      </p>
      <ul className="order-list__order">
        { orderList }
      </ul>
      { total() }
    </div>
  )
}

const mapStateToProps = ({ shoppingCart }) => ({
  orderItems: shoppingCart
})

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: (productId, quantity) => {
    dispatch(changeOrderProductQuantity(productId, quantity))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)