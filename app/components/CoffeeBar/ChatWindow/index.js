import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class ChatWindow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        ChatWindow component
      </div>
    )
  }
}

export default CSSModules(ChatWindow, style)
