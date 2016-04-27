import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Content } from './'

describe('<Content />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Content />
    )
    expect(renderedComponent.find('div'))
  })
})
