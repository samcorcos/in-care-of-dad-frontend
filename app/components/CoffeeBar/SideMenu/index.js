import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class SideMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: true,
      messages: true
    }
  }

  collapse(value) {
    this.setState({
      [value]: this.state[value] ? false : true
    })
  }

  render() {

    const locations = this.props.locations.map((location) => {
      return (
        <div key={location.name} styleName="item">
          <div>{location.name}</div>
          <div>{location.count}</div>
        </div>
      )
    })
    const people = this.props.users.map((person) => {
      return (
        <div key={person} styleName="item">
          <div>{person}</div>
        </div>
      )
    })

    return (
      <div styleName="nav">
        <div styleName="wrapper">
          <div
            onClick={this.collapse.bind(this, "locations")}
            styleName="header">
            <span styleName="collapse">+</span>
            <span>Locations</span>
          </div>
          <div style={{display: this.state.locations ? "block" : "none"}}>
            {locations}
          </div>
        </div>
        <div styleName="wrapper">
          <div
            onClick={this.collapse.bind(this, "messages")}
            styleName="header">
            <span styleName="collapse">+</span>
            <span>Direct Messages</span>
          </div>
          <div style={{display: this.state.messages ? "block" : "none"}}>
            {people}
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(SideMenu, style)
