import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Video from 'components/About/Video'
import Content from 'components/About/Content'
import Footer from 'components/Footer'

export class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <section styleName="about">
          <div styleName="overlay"></div>
          <Video />
          <Content />
        </section>

        <Footer />
      </div>
    )
  }
}

export default CSSModules(About, style)
