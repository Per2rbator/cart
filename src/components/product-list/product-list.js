import React, { Component } from 'react'
import Product from '../product'
import { connect } from 'react-redux'
import { withProductService } from '../hoc'
import { fetchProducts, addProductToCart } from '../../actions'
import Loader from '../loader'
import AddForm from '../add-form'

import './product-list.css'

export class ProductList extends Component {

  state = {
    form: {
      isVisible: false,
      product: {},
      quantity: 0,
      total: 0
    }
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  onProductAdded(id) {
    const { products } = this.props
    const product = products.find(product => product.id === id)
    
    this.setState(({form: { quantity }}) => ({
      form: {
        isVisible: true,
        product: product,
        quantity: quantity + 1,
        total: (quantity + 1) * product.price
      }
    }))
  }

  onCloseForm() {
    this.setState(() => ({
      form : {
        isVisible: false,
        product: {},
        quantity: 0,
        total: 0
      }
    }))
  }

  updateQuantity(quantity) {
    if (!(quantity + this.state.form.quantity)) {
      this.onCloseForm()
    } else {
      this.setState(({ form }) => ({
        form: {
          isVisible: true,
          product: form.product,
          quantity: quantity + form.quantity,
          total: (quantity + form.quantity) * form.product.price
        }
      }))
    }
  }

  onAddToCart() {
    const { product, quantity, total } = this.state.form

    this.props.addProductToCart({
      product, quantity, total
    })
    
    this.onCloseForm()
  }

  render() {
    if (this.props.loading) return <Loader />

    const { products } = this.props

    const form = this.state.form.isVisible ?
      <AddForm
        { ...this.state.form }
        onClose={ () => this.onCloseForm() }
        onIncrease={ () => this.updateQuantity(1) }
        onDecrease={ () => this.updateQuantity(-1) }
        onAddToCart={ () => this.onAddToCart() } /> : null

    const productList = products.map((product, idx) => (
      <Product
        { ...product }
        key={ product.id }
        onProductAdded={ (id) => this.onProductAdded(id) } />
    ))

    return (
      <div className="product-list">
        { form }
        { productList }
      </div>
    )
  }
}

const mapStateToProps = ({ productsInfo: { products, loading, error } }) => (
  { products, loading, error }
)

const mapDispatchToProps = (dispatch, { productService }) => {
  
  return{
    fetchProducts: fetchProducts(dispatch, productService),
    addProductToCart: (product) => dispatch(addProductToCart(product))
  }
}

export default withProductService(
  connect(mapStateToProps, mapDispatchToProps)(ProductList)
)
