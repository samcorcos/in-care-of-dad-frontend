import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

import spinner from 'file!./spinner.gif'

export class Loading extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    e.stopPropagation()
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)} styleName="loading">
        <img src={spinner} />
      </div>
    )
  }
}

export default CSSModules(Loading, styles)
