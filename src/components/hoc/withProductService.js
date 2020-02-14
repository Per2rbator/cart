import React from 'react'
import { ProductServiceConsumer } from '../../products-context'

const withProductService = (Component) => (props) => (
  
  <ProductServiceConsumer>
    {
      (productService) => 
        <Component
          { ...props }
          productService={ productService } /> 
    }
  </ProductServiceConsumer>
)

export default withProductService
