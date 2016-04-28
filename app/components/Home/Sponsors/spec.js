import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Sponsors } from './'

describe('<Sponsors />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Sponsors />
    )
    expect(renderedComponent.find('div'))
  })
})
