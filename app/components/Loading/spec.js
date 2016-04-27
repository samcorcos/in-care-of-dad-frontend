import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Loading } from './'

describe('<Loading />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Loading />
    )
    expect(renderedComponent.find('div'))
  })
})
