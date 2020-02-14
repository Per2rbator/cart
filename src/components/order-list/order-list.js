import React from 'react'

import './order-list.css'

const OrderList = () => {

  return (
    <div className="order-list">
      <p className="order-list__heading">
        Cart
      </p>
      <ul className="order-list__order">
      <li className="order-list__order-item">
          <div className="order-item__image-wrapper">
            <img className="order-item__image" src="/images/jeans_1.jpg" alt=""/>
          </div>
          <div>
            <p className="order-item__name">asdfasdf</p>
            <p className="order-item__description">asdfasdf</p>
            <p className="order-item__in-cart">Quantity: 3</p>
            <p className="order-item__in-cart">Total: 4500</p>
            <div className="order-item__controls">
              <i className="material-icons order-item__add">add</i>
              <i className="material-icons order-item__remove">remove</i>
              <i className="material-icons order-item__delete">delete</i>
            </div>
          </div>
        </li>
        <li className="order-list__order-item">
          <div className="order-item__image-wrapper">
            <img className="order-item__image" src="/images/jeans_2.jpg" alt=""/>
          </div>
          <div>
            <p className="order-item__name">asdfasdf</p>
            <p className="order-item__description">asdfasdf</p>
            <p className="order-item__in-cart">Quantity: 3</p>
            <p className="order-item__in-cart">Total: 4500</p>
            <div className="order-item__controls">
              <i className="material-icons order-item__add">add</i>
              <i className="material-icons order-item__remove">remove</i>
              <i className="material-icons order-item__delete">delete</i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default OrderList