import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Landing } from './'

describe('<Landing />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Landing />
    )
    expect(renderedComponent.find('div'))
  })
})
