import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { CoffeeBar } from './'

describe('<CoffeeBar />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <CoffeeBar />
    )
    expect(renderedComponent.find('div'))
  })
})
