import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const Header = props => {
  return (
    <div styleName="header">
      <div styleName="title">
        #title of room
      </div>
      <div styleName="count">
        43 members
      </div>
    </div>
  )
}

export default CSSModules(Header, style)
