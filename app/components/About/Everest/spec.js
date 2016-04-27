import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Everest } from './'

describe('<Everest />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Everest />
    )
    expect(renderedComponent.find('div'))
  })
})
