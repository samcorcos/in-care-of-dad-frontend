import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

const post = {
    title: "This is the title of the post",
    url: "https://source.unsplash.com/random",
    body: "This is the body of the post, limited to a certain number of characters"
  }

export class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const item = (
      <div styleName="post">
        <img src={post.url} styleName="image" />
        <div styleName="post-text">
          <h4 styleName="post-title">{post.title}</h4>
          <p styleName="post-body">{post.body}</p>
        </div>
      </div>
    )

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
            {item}
            {item}
            {item}
            {item}
            {item}
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
