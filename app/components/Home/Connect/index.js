import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import chat from 'images/chat.png'

export class Connect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section styleName="connect">
        <h2 styleName="title">Connect locally at the Coffee Bar</h2>
        <div styleName="wrapper">
          <img src={chat} styleName="chat" />
          <div styleName="content">
            <p styleName="item">Connect with a network of over 100,000 people who are going through the same thing you are.</p>
            <p styleName="item">Find local people that you can meet with in person.</p>
            <p styleName="item">Real-time support and inspiration from caregivers and people just like you, all over the world.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default CSSModules(Connect, style)
