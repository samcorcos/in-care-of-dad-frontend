import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import InputBar from 'components/CoffeeBar/InputBar'

export const ChatWindow = props => {
  return (
    <section styleName="chat-window">
      <InputBar />
    </section>
  )
}

export default CSSModules(ChatWindow, style)
