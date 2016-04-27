import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Navbar from 'components/Navbar'

export class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.foo()
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.props.children }
      </div>
    )
  }
}

App.defaultProps = {
  foo() { return console.log("WOOOOOOO") }
}

export default CSSModules(App, style)
