import React from 'react'
import { shallow } from 'enzyme'
import App from './'

describe('App: ', () => {
  const app = shallow(<App />)
  
  it('should renders correctly', () => { 
    expect(app.find('Switch').length).toBe(1)
    expect(app.find('Route').length).toBe(2)
  })

  it('routes should have correct paths', () => {
    expect(app.find('Route').at(0).prop('path')).toBe('/')
    expect(app.find('Route').get(1).props.path).toEqual('/cart')
    // просто достал разными способами
  })
})