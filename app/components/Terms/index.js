import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class Terms extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Terms component
      </div>
    )
  }
}

export default CSSModules(Terms, style)
