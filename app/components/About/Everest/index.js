import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import website from 'images/website-select.jpg'

export const Everest = () => {
  return (
    <section styleName="everest">
      <h2 styleName="title">Take Geography Off the Screen</h2>

      <div styleName="content">
        <div styleName="image">
          <img src={website} styleName="website" />
        </div>
        <div styleName="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </section>
  )
}

export default CSSModules(Everest, style)
