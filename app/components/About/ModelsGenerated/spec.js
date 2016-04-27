import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { ModelsGenerated } from './'

describe('<ModelsGenerated />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <ModelsGenerated />
    )
    expect(renderedComponent.find('div'))
  })
})
