import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import InputBar from 'components/CoffeeBar/InputBar'
import Header from 'components/CoffeeBar/Header'
import Message from 'components/CoffeeBar/Message'

export class ChatWindow extends React.Component {
  constructor(props) {
    super(props)
    this.updateScroll = this.updateScroll.bind(this)
  }

  updateScroll() {
    /* Sets the scroll to the bottom */
    const element = document.getElementById("message-wrapper")
    element.scrollTop = element.scrollHeight
  }

  componentDidMount() {
    /* When the component mounts, set to the bottom */
    /* TODO eventually we want to handle unread messages and change this */
    this.updateScroll()
  }

  render() {
    return (
      <section styleName="chat-window">
        <Header />

        <div id="message-wrapper" styleName="message-wrapper">
          {/* TODO obviously, this needs to map with data */}
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>

        <InputBar />
      </section>
    )
  }
}

export default CSSModules(ChatWindow, style)
