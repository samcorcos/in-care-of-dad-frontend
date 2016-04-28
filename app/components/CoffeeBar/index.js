import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

const props = {
  users: [
    "samcorcos",
    "kim",
    "karen",
    "john",
    "sally"
  ],
  locations: [
    "Seattle",
    "San Francisco",
    "Austin",
    "New York",
    "Houston",
    "Dallas",
    "San Antonio",
    "Buffalo",
    "Sacramento",
    "Los Angeles",
    "Bejing"
  ]
}

export class CoffeeBar extends React.Component {
  constructor(props) {
    super(props)
  }

  randomNumber() {
    return Math.ceil(Math.random() * 100)
  }

  render() {
    let self = this
    const locations = props.locations.map((place) => {
      return (
        <div key={place} styleName="item">
          <div styleName="location">{place}</div>
          <div styleName="count">{self.randomNumber.bind(this)()}</div>
        </div>
      )
    })
    const people = props.users.map((person) => {
      return (
        <div key={person} styleName="item">
          <div>{person}</div>
        </div>
      )
    })

    return (
      <section styleName="coffee-bar">
        <div styleName="nav">
          <div styleName="location-container">
            <h4 styleName="subtitle">Locations</h4>
            <div styleName="list">
              {locations}
            </div>
          </div>

          <div styleName="message-container">
            <h4 styleName="subtitle">Direct messages</h4>
            <div styleName="list">
              {people}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CSSModules(CoffeeBar, style)
