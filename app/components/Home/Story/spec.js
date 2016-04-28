import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Story } from './'

describe('<Story />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Story />
    )
    expect(renderedComponent.find('div'))
  })
})
