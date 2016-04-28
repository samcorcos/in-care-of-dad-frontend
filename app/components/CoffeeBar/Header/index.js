import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const Header = props => {
  return (
    <div>
      <div>
        #title of room
      </div>
      <div>
        43 members
      </div>
    </div>
  )
}

export default CSSModules(Header, style)
