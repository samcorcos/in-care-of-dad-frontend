import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from 'components/App'
import Map from 'components/Map'

import 'styles/reset'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Map} />
		</Route>
	</Router>, document.getElementById('root'))
