import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { ModelsGenerated } from './'

const props = {
  count: 100
}

describe('<ModelsGenerated />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <ModelsGenerated {...props} />
    )
    expect(renderedComponent.find('div'))
  })
})