import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const Video = () => {
  return (
    <div styleName="video">
      <div styleName="video-placeholder">
      </div>
    </div>
  )
}

export default CSSModules(Video, style)
