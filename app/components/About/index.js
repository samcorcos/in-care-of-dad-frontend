import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Video from 'components/About/Video'
import Content from 'components/About/Content'
import ModelsGenerated from 'components/About/ModelsGenerated'
import Everest from 'components/About/Everest'
import Options from 'components/About/Options'
import Education from 'components/About/Education'
import Military from 'components/About/Military'
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

        {/* TODO this is a placeholder. Needs to get real `props` */}
        <ModelsGenerated count={2804} />

        <Everest />

        <Options />

        <Education />

        <Military />

        <Footer />
      </div>
    )
  }
}

export default CSSModules(About, style)
