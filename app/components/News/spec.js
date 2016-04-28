import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { News } from './'

describe('<News />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <News />
    )
    expect(renderedComponent.find('div'))
  })
})
