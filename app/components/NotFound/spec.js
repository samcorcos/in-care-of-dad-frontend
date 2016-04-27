import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { NotFound } from './'

describe('<NotFound />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <NotFound />
    )
    expect(renderedComponent.find('div'))
  })
})
