import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { ChatWindow } from './'

describe('<ChatWindow />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <ChatWindow />
    )
    expect(renderedComponent.find('div'))
  })
})
