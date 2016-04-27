import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Options } from './'

describe('<Options />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Options />
    )
    expect(renderedComponent.find('div'))
  })
})
