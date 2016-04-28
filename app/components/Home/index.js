import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Landing from 'components/Home/Landing'
import Story from 'components/Home/Story'
import Resources from 'components/Home/Resources'
import Connect from 'components/Home/Connect'
import News from 'components/Home/News'
import Sponsors from 'components/Home/Sponsors'
import Footer from 'components/Footer'

export class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="home">
        <Landing />
        <Story />
        <Resources />
        <Connect />
        <News />
        <Sponsors />
        <Footer />
      </div>
    )
  }
}

export default CSSModules(Home, style)
