import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class Sponsors extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section styleName="sponsors">
        <h2 styleName="title">Our Sponsors</h2>
        <div styleName="wrapper">
          <div styleName="placeholder"></div>
          <div styleName="placeholder"></div>
          <div styleName="placeholder"></div>
          <div styleName="placeholder"></div>
        </div>
      </section>
    )
  }
}

export default CSSModules(Sponsors, style)
