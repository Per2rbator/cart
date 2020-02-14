import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ProductServicePrivider } from './products-context'
import ProductService from './services'

import App from './components/app'

import './index.css'

const productService = new ProductService()

ReactDOM.render(
  <Provider store={ store }>
    <ProductServicePrivider value={ productService }>
      <Router>
        <App />
      </Router>
    </ProductServicePrivider>
  </Provider>,
  document.getElementById('root')
)