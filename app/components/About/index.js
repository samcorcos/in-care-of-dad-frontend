import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        About component
      </div>
    )
  }
}

export default CSSModules(About, style)
