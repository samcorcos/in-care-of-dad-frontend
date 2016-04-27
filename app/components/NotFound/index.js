import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class NotFound extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        404 - Not found
      </div>
    )
  }
}

export default CSSModules(NotFound, style)
