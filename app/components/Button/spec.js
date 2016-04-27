import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Button } from './'

describe('<Button />', () => {

  it('should render its children', () => {
    const children = (<p>Test</p>)
    const renderedComponent = shallow(
      <Button type="primary">
        { children }
      </Button>
    )
    expect(renderedComponent.contains(children))
  })

  it('should render a <button> element', () => {
    const renderedComponent = shallow(
      <Button type="primary">
        Test
      </Button>
    )
    expect(renderedComponent.find('button').length)
  })

  it('should take in a string as a type', () => {
    const renderedComponent = shallow(
      <Button type="primary">
        Test
      </Button>
    )
    expect(/primary/.test(renderedComponent.node.props.className))
  })

  it('should handle click events', () => {
    const onClickSpy = expect.createSpy()
    const renderedComponent = shallow(
      <Button onClick={onClickSpy} type="primary">
        Test
      </Button>
    )
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  })
})
