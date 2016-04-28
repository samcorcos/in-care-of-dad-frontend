import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import InputBar from 'components/CoffeeBar/InputBar'
import Header from 'components/CoffeeBar/Header'

export const ChatWindow = props => {
  return (
    <section styleName="chat-window">
      <Header />
      <InputBar />
    </section>
  )
}

export default CSSModules(ChatWindow, style)
