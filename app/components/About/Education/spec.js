import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Education } from './'

describe('<Education />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Education />
    )
    expect(renderedComponent.find('div'))
  })
})
