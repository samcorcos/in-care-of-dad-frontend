import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const Story = () => {
  return (
    <section styleName="story">
      <h2 styleName="title">Our story</h2>
      <div styleName="section">
        <div styleName="content">
          Karen and I created <span style={{fontStyle: "italic"}}>In Care of Dad</span> as a tribute to our father, who died on July 16, 2006, after a long, painful illness.
        </div>
        <img src="https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png" styleName="image" />
      </div>
      <div styleName="section">
        <img src="https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png" styleName="image" />
        <div styleName="content">
          What helped us most through our dad's ordeal was the support of family and friends, the wonderful peoplewho provided us with advice and inspiration and became our essential survival system at the time.
        </div>
      </div>
      <div styleName="section">
        <div styleName="content">
          After our father's death, Karen and I asked ourselves:
          <blockquote styleName="blockquote">
            Wouldn't it be amazing if we could create that same type of caregiving support for others? And wouldn't Dad just love that idea!
          </blockquote>
          That's how <span style={{fontStyle: "italic"}}>In Care of Dad</span> came to be.
        </div>
        <img src="https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png" styleName="image" />
      </div>
    </section>
  )
}

export default CSSModules(Story, style)
