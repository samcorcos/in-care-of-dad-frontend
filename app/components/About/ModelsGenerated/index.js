import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const ModelsGenerated = props => {
  return (
    <section styleName="generated">
      Models Generated: <span styleName="count">{props.count}</span>
    </section>
  )
}

ModelsGenerated.propTypes = {
  count: React.PropTypes.number.isRequired
}

export default CSSModules(ModelsGenerated, style)
