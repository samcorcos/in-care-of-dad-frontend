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
          Options
        </div>

        <div styleName="card">
          <div styleName="card-head">
            <h3 styleName="head-title">Today</h3>
            <div styleName="head-options">Popular | Newest</div>
          </div>

          <div>
            body
          </div>
        </div>

        <div styleName="right-panel">
          More options
        </div>
      </section>
    )
  }
}

export default CSSModules(News, style)
