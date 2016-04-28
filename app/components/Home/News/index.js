import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import news from 'images/news.png'

export class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section styleName="news">
        <h2 styleName="title">Stay up-to-date with research and community news</h2>
        <div styleName="wrapper">
          <div styleName="content">
            <p styleName="item">Connect with a network of over 100,000 people who are going through the same thing you are.</p>
            <p styleName="item">Find local people that you can meet with in person.</p>
            <p styleName="item">Real-time support and inspiration from caregivers and people just like you, all over the world.</p>
          </div>
          <img src={news} styleName="image" />
        </div>
      </section>
    )
  }
}

export default CSSModules(News, style)
