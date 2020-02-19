import React from 'react'

import './product.css'

const Product = ({ id, name, imgURL, description, price, onProductAdded }) => {

  return (
    <div className="product">
      <div className="product__image-wrapper">
        <img className="product__image" src={ imgURL } alt={ name }/>
      </div>

      <div className="product__description">
        <p className="product__name">{ name }</p>
        <p className="product__additional">{ description }</p>
        <p className="product__price">{ price } &#8381;</p>
      </div>

      <button className="product__add" onClick={ () => onProductAdded(id) }>
        <i className="material-icons">add</i> Add to cart
      </button>
    </div>
  )
}

export default Product