import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { InputBar } from './'

describe('<InputBar />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <InputBar />
    )
    expect(renderedComponent.find('div'))
  })
})
