import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './header'

describe('App header', () => {

  it('should correctly render app header', () => {
    const props = {
      counter: 0
    }

    const header = shallow(<Header { ...props } />).find('header')
    expect(header.length).toEqual(1)
  })

  it('should correctly render cart counter indicator', () => {
    const props = {
      counter: 10
    }

    const counter = shallow(<Header {...props} />).find('.header__cart-counter')
    expect(counter.text()).toEqual('10')
  })

  it('should`t render cart counter indicator', () => {
    const props = {
      counter: 0
    }

    const counter = shallow(<Header { ...props } />).find('.header__cart-counter')
    expect(counter.length).toEqual(0)
  })
})