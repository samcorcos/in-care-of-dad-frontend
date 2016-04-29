import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Message } from './'

describe('<Message />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Message />
    )
    expect(renderedComponent.find('div'))
  })
})
