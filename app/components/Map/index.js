import React from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'
import style from './style'

export class Map extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // renderMap()
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default CSSModules(Map, style)
