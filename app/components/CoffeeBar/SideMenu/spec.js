import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { SideMenu } from './'

describe('<SideMenu />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <SideMenu />
    )
    expect(renderedComponent.find('div'))
  })
})
