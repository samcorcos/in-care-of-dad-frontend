import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const Button = props => {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      styleName={props.type}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  type: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
}

export default CSSModules(Button, style)
