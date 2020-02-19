import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.css'

export const Header = ({ counter }) => {

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


    // "@testing-library/jest-dom": "^4.2.4",

    // "jest": "24.9.0",
    // "jest-enzyme": "^7.1.2",

    // setupTests.js

//     import Enzyme from 'enzyme'
// import EnzymeAdapter from 'enzyme-adapter-react-16'

// Enzyme.configure({
//   adapter: new EnzymeAdapter(),
//   disableLifecycleMethods: true
// })