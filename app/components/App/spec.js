import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'

import { App } from './'

describe('<App />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <App />
    )
    expect(renderedComponent.find('div'))
  })
  it('should call function from props on componentDidMount', () => {
    const fooSpy = expect.createSpy()
    const props = {
      foo: fooSpy
    }
    const renderedComponent = mount(
      <App {...props}>
        Test
      </App>
    )
    expect(fooSpy).toHaveBeenCalled()
  })
})
