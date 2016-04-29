import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { SideMenu } from './'

const menuData = {
  users: [
    "samcorcos"
  ],
  locations: [
    {
      name: "Seattle",
      count: Math.ceil(Math.random() * 100)
    }
  ]
}

describe('<SideMenu />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <SideMenu
        users={menuData.users}
        locations={menuData.locations} />
    )
    expect(renderedComponent.find('div'))
  })
})
