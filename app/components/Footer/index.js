import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Footer component
      </div>
    )
  }
}

export default CSSModules(Footer, style)
