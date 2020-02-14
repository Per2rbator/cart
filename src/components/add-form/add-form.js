import React from 'react'

import './add-form.css'

const AddForm = ({ product, quantity, total,
                    onClose, onIncrease, onDecrease, onAddToCart }) => {

  const onClickOnOverlay = (e) => {
    if (e.target.className === 'add-form__modal') {
      onClose()
    }
  }

  return (
    <div className="add-form__modal" onClick={ (e) => onClickOnOverlay(e) }>
      <div className="add-form__form">
        <i
          className="add-form__close material-icons"
          onClick={ () => onClose() } 
        >
          close
        </i>
        <p className="add-form__heading">Add to cart</p>

        <div className="add-form__product">
          <div className="add-form__product-image-wrapper">
            <img className="add-form__product-image" src={ product.imgURL } alt=""/>
          </div>
          <div className="add-form__product-description">
            <p className="add-from__product-name">{ product.name }</p>
            <p className="add-from__product-details">{ product.description }</p>
          </div>
        </div>
        <p className="add-from__quantity">
          Quantity: &nbsp;
          <span className="add-from__quantity-value">
            { quantity }
          </span>
          <i className="material-icons" onClick={ () => onIncrease() }>add</i>
          <i className="material-icons" onClick={ () => onDecrease() }>remove</i>
        </p>
        <p className="add-from__total">
          Total: <span>{ total } &#8381;</span>
        </p>
        <div className="add-form__footer">
          <button
            className="add-from__add"
            onClick={ () => onAddToCart()}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddForm