import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'
import { Link } from 'react-router'

import logo from 'images/navbar-logo.png'

export class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer styleName="footer">

        <div styleName="list">
          <img src={logo} styleName="logo" />
        </div>

        <ul styleName="list">
          <Link to="#" styleName="link">FAQs</Link>
          <Link to="#" styleName="link">Map</Link>
          <Link to="#" styleName="link">Examples</Link>
          <Link to="#" styleName="link">Privacy Policy</Link>
          <Link to="#" styleName="link">Terms of Use</Link>
        </ul>

        <ul styleName="list">
          <Link to="#" styleName="link">Contact</Link>
          <Link to="#" styleName="link">Media Inquiries</Link>
          <Link to="#" styleName="link">Careers</Link>
        </ul>

        <div>

        </div>

      </footer>
    )
  }
}

export default CSSModules(Footer, style)
