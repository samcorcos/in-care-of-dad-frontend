import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Resources } from './'

describe('<Resources />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Resources />
    )
    expect(renderedComponent.find('div'))
  })
})
