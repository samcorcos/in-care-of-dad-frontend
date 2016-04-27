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

        <div styleName="credits">
          Icons by&nbsp;
          <a href="http://www.flaticon.com/authors/scott-de-jonge" title="Scott de Jonge" target="_blank">
            Scott de Jonge
          </a>
          ,&nbsp;
          <a href="http://www.freepik.com" title="Freepik">
            Freepik
          </a>
          ,&nbsp;
          <a href="http://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">
            Dave Gandy
          </a>
          &nbsp;from&nbsp;
          <a href="http://www.flaticon.com" title="Flaticon" target="_blank">
            www.flaticon.com
          </a>
          &nbsp;is licensed by&nbsp;
          <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
            CC 3.0 BY
          </a>
        </div>

      </footer>
    )
  }
}

export default CSSModules(Footer, style)
