import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Connect } from './'

describe('<Connect />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Connect />
    )
    expect(renderedComponent.find('div'))
  })
})
