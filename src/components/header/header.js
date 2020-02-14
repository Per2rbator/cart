import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {

  return (
    <header className="header">
      <Link to="/" className="header__logo">
          Les Jeans
      </Link>
      <div className="header__actions">
        <Link to="/cart" className="material-icons header__cart">shopping_cart</Link>
      </div>
    </header>
  )
}

export default Header