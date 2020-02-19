import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../header'
import { HomePage, CartPage } from '../pages'

import './app.css'

const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/cart" component={ CartPage } />
      </Switch>
    </>
  )
}

export default App