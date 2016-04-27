import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import jet from 'images/icons/fighter-jet.icon.png'
import leaf from 'images/icons/leaf.icon.png'
import book from 'images/icons/books.icon.png'
import excavator from 'images/icons/excavator.icon.png'
import climb from 'images/icons/climb.icon.png'

export const Video = () => {
  return (
    <div styleName="video">
      <div styleName="overlay"></div>
      <div styleName="video-placeholder">
      </div>

      <div styleName="content">
        <h2 styleName="title">The most intuitive platform for 3D printing topographical maps.</h2>
        <ul styleName="list">
          <li styleName="item">
            <img src={jet} styleName="icon" />
            Special Operations
          </li>
          <li styleName="item">
            <img src={book} styleName="icon" />
            Education
          </li>
          <li styleName="item">
            <img src={leaf} styleName="icon" />
            Ecology
          </li>
          <li styleName="item">
            <img src={excavator} styleName="icon" />
            Construction
          </li>
          <li styleName="item">
            <img src={climb} styleName="icon" />
            Mountain Climbing
          </li>
        </ul>
      </div>

    </div>
  )
}

export default CSSModules(Video, style)
