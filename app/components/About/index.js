import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Footer from 'components/Footer'

export class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <section styleName="about">
          test
        </section>
        <Footer />
      </div>
    )
  }
}

export default CSSModules(About, style)
