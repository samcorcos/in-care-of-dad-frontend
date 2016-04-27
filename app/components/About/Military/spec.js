import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Military } from './'

describe('<Military />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Military />
    )
    expect(renderedComponent.find('div'))
  })
})
