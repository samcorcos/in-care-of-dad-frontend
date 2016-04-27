import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Terms } from './'

describe('<Terms />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Terms />
    )
    expect(renderedComponent.find('div'))
  })
})
