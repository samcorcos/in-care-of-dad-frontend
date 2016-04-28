import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'
import { Link } from 'react-router'

import Button from 'components/Button'

import logo from 'images/flower.png'

export const Navbar = props => {
  return (
    <nav styleName="navbar">
      <div>
        <Link to="/">
          <img src={logo} styleName="image" />
          <h2 styleName="logo">In Care of Dad</h2>
        </Link>
      </div>

      <div>
        <ul styleName="list">
          <Link to="/" styleName="link">Resources</Link>
          <Link to="chat" styleName="link">Coffee bar</Link>
          <Link to="examples" styleName="link">News</Link>
          <div styleName="link">Sign in</div>
          <Button type="accent-primary">
            Sign up
          </Button>
        </ul>
      </div>
    </nav>
  )
}

export default CSSModules(Navbar, style)
