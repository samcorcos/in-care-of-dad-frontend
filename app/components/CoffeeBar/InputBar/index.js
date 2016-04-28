import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class InputBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type="text" styleName="input" placeholder="Type a message" />
      </div>
    )
  }
}

export default CSSModules(InputBar, style)
