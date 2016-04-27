import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Video } from './'

describe('<Video />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Video />
    )
    expect(renderedComponent.find('div'))
  })
})
