import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Navbar from 'components/Navbar'

export class App extends React.Component {
  constructor(props) {
    super(props)
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

export default CSSModules(App, style)
