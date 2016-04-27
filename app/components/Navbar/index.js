import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const Navbar = props => {
  return (
    <nav>
      Navbar component
    </nav>
  )
}

export default CSSModules(Navbar, style)
