import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import logo from 'images/navbar-logo.png'

export const Navbar = props => {
  return (
    <nav styleName="navbar">
      <div>
        <img src={logo} styleName="logo" />
      </div>

      <div>
        <ul styleName="list">
          <li styleName="link">Test</li>
          <li styleName="link">Test</li>
          <li styleName="link">Test</li>
        </ul>
      </div>
    </nav>
  )
}

export default CSSModules(Navbar, style)
