import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import temp from 'images/mountain.jpg'

export const Military = () => {
  return (
    <section styleName="military">
      <h2 styleName="title">For Tactical Mission Planning</h2>

      <div styleName="content">
        <img src={temp} styleName="image" />
        <div styleName="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>
    </section>
  )
}

export default CSSModules(Military, style)
