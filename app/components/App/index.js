import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        App component
      </div>
    )
  }
}

export default CSSModules(App, style)
