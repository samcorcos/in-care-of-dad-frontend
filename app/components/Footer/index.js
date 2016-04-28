import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'
import { Link } from 'react-router'

import logo from 'images/flower.png'

export class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer styleName="footer">

        <div styleName="logo-wrapper">
          <img styleName="logo" src={logo} />
          <div styleName="title">In Care of Dad</div>
        </div>

        <div>
          <Link styleName="item" to="#">Resources</Link>
          <Link styleName="item" to="#">Coffee Bar</Link>
          <Link styleName="item" to="#">Contact Us</Link>
          <Link styleName="item" to="#">Press</Link>
        </div>

      </footer>
    )
  }
}

export default CSSModules(Footer, style)
