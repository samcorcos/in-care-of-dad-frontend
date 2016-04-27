import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import picture from 'images/education.jpg'

export const Education = () => {
  return (
    <section styleName="education">
      <div styleName="gradient"></div>

      <h2 styleName="title">Maps for Education</h2>

      <div styleName="content">
        <div styleName="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <img src={picture} styleName="image" />
        
      </div>
    </section>
  )
}

export default CSSModules(Education, style)
