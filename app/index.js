import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from 'redux/store'

import App from 'components/App'
import Home from 'components/Home'
import About from 'components/About'
import NotFound from 'components/NotFound'

import 'styles/reset'
import 'file?name=[name].[ext]!../index.html'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
				<Route path="about" component={About} />

        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('root'))
