import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'
import { Link } from 'react-router'

import Button from 'components/Button'

import logo from 'images/navbar-logo.png'

export const Navbar = props => {
  return (
    <nav styleName="navbar">
      <div>
        <Link to="/">
          <img src={ logo } styleName="logo" />
        </Link>
      </div>

      <div>
        <ul styleName="list">
          <Link to="/" styleName="link">Map</Link>
          <Link to="about" styleName="link">About</Link>
          <Link to="examples" styleName="link">Examples</Link>
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
