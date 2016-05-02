import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="message">
        <div styleName="avatar"></div>
        <div>
          <span styleName="name">Bob Smith</span>
          <span styleName="time-stamp">4:35pm</span>
        </div>
        <div styleName="message-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    )
  }
}

export default CSSModules(Message, style)
