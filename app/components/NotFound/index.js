import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const NotFound = () => {
  return (
    <div>
      404 - Not found
    </div>
  )
}

export default CSSModules(NotFound, style)
