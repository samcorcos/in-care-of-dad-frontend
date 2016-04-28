import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import SideMenu from 'components/CoffeeBar/SideMenu'
import ChatWindow from 'components/CoffeeBar/ChatWindow'

const menuData = {
  users: [
    "samcorcos",
    "kim",
    "karen",
    "john",
    "sally"
  ],
  locations: [
    {
      name: "Seattle",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "San Francisco",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "Austin",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "New York",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "Houston",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "Dallas",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "San Antonio",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "Buffalo",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "Sacramento",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "Los Angeles",
      count: Math.ceil(Math.random() * 100)
    },
    {
      name: "Bejing",
      count: Math.ceil(Math.random() * 100)
    }
  ]
}

const chatData = {
  
}

export class CoffeeBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section styleName="coffee-bar">
        <SideMenu
          locations={menuData.locations}
          users={menuData.users} />
        <ChatWindow />
      </section>
    )
  }
}

export default CSSModules(CoffeeBar, style)
