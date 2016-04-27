import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Navbar from 'components/Navbar'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
        App component
      </div>
    )
  }
}

export default CSSModules(App, style)
