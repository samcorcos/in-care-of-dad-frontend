import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class CoffeeBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section styleName="coffee-bar">
        <div styleName="nav">
          <h3 styleName="title">Coffee bar</h3>
        </div>
      </section>
    )
  }
}

export default CSSModules(CoffeeBar, style)
