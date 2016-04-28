import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        News component
      </div>
    )
  }
}

export default CSSModules(News, style)
