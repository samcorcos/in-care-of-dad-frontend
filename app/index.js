import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from 'components/App'
import Map from 'components/Map'
import About from 'components/About'
import NotFound from 'components/NotFound'
import Terms from 'components/Terms'

import 'styles/reset'
import 'file?name=[name].[ext]!../index.html'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Map} />
			<Route path="/about" component={About} />

			<Route path="/terms" component={Terms} />
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>, document.getElementById('root'))
