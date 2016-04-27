import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Map } from './'

describe('<Map />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Map />
    )
    expect(renderedComponent.find('div'))
  })
})
