import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const SideMenu = props => {
  const locations = props.locations.map((location) => {
    return (
      <div key={location.name} styleName="item">
        <div styleName="location">{location.name}</div>
        <div styleName="count">{location.count}</div>
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
  )
}

export default CSSModules(SideMenu, style)
