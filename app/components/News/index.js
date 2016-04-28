import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section styleName="news">

        <div styleName="left-panel">
          List of items
        </div>

        <div styleName="card">
          foo
        </div>

        <div styleName="right-panel">
          bar
        </div>
      </section>
    )
  }
}

export default CSSModules(News, style)
