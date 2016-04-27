import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'

import { About } from './'

describe('<About />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <About />
    )
    expect(renderedComponent.find('div'))
  })
  // It should render a footer
})
