import React from 'react'
import { connect } from 'react-redux'
import { changeOrderProductQuantity } from '../../actions'

import './order-list.css'

export const OrderList = ({ orderItems, changeQuantity }) => {

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
          <button
            className="order-item__change-quantity"
            onClick={() => changeQuantity(item.product.id, 1)}
          >
            <i className="material-icons order-item__add">add</i>
          </button>
          <button
            className="order-item__change-quantity"
            onClick={() => changeQuantity(item.product.id, -1)}
          >
            <i className="material-icons order-item__remove">remove</i>
          </button>
          <button
            className="order-item__change-quantity"
            onClick={() => changeQuantity(item.product.id, -item.quantity)}
          >
            <i className="material-icons order-item__delete">delete</i>
          </button>
        </div>
      </div>
    </li>
  )) : null

  const totalPrice = orderItems.length ? 
    orderItems.reduce((total, item) => item.total + total, 0) : 0

  const total = totalPrice ? (
    <div className="order-list__total">
      Итого: <span className="order-list__total-value">{ totalPrice } &#8381;</span>
    </div>
  ) : (
    <div className="order-list__empty">
      Your cart is empty
    </div>
  )


  return (
    <div className="order-list">
      <p className="order-list__heading">
        Cart
      </p>
      <ul className="order-list__order">
        { orderList }
      </ul>
      { total }
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
