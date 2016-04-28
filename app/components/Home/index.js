import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Landing from 'components/Home/Landing'
import Story from 'components/Home/Story'

export class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="home">
        <Landing />
        <Story />
      </div>
    )
  }
}

export default CSSModules(Home, style)
