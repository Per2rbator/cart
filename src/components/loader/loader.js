import React from 'react'

import './loader.css'

const Loader = () => {

  return (
    <div className="preloader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader