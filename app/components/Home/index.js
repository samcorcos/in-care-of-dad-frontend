import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Home component
      </div>
    )
  }
}

export default CSSModules(Home, style)
