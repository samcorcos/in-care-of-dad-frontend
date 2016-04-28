import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'
import { Link } from 'react-router'

export class Resources extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section styleName="resources">
        <h2 styleName="title">Get the resources you need</h2>
        <div styleName="wrapper">
          <ul styleName="pushpin">
              <h3 styleName="checklist">The Checklist</h3>
              <Link to="#">1.&nbsp;&nbsp;&nbsp;Establish Yourself as the Advocate</Link>
              <Link to="#">2.&nbsp;&nbsp;&nbsp;Evaluate the Situation</Link>
              <Link to="#">3.&nbsp;&nbsp;&nbsp;Understanding the Insurance</Link>
              <Link to="#">4.&nbsp;&nbsp;&nbsp;Evaluate & Implement Safety Measures</Link>
              <Link to="#">5.&nbsp;&nbsp;&nbsp;Create these Important Documents</Link>
              <Link to="#">6.&nbsp;&nbsp;&nbsp;Focus on Medications</Link>
              <Link to="#">7.&nbsp;&nbsp;&nbsp;Build the Best Medical Team</Link>
              <Link to="#">8.&nbsp;&nbsp;&nbsp;Organize Financial Information</Link>
              <Link to="#">9.&nbsp;&nbsp;&nbsp;Discuss Advance Directives</Link>
              <Link to="#">10.&nbsp;Build a Support Structure</Link>
          </ul>
          <div styleName="content">
            test
          </div>
        </div>
      </section>
    )
  }
}

export default CSSModules(Resources, style)
