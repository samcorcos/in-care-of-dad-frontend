import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class Connect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Connect component
      </div>
    )
  }
}

export default CSSModules(Connect, style)
