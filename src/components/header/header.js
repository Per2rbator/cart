import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.css'

const Header = ({ counter }) => {

  const cartIndicator = counter ?
    <span className="header__cart-counter">{ counter }</span> : null

  return (
    <header className="header">
      <Link to="/" className="header__logo">
          Les Jeans
      </Link>
      <div className="header__actions">
        <Link to="/cart" className="header__cart">
          <i className="material-icons">shopping_cart</i>
          { cartIndicator }
        </Link>
      </div>
    </header>
  )
}

const mapStateToProps = ({shoppingCart: { length }}) => ({
  counter: length
})

export default connect(mapStateToProps)(Header)