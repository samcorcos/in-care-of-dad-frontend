import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Message component
      </div>
    )
  }
}

export default CSSModules(Message, style)
