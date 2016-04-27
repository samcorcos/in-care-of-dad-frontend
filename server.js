if (process.env.NODE_ENV !== "production") {

  const webpack = require('webpack')
  const WebpackDevServer = require('webpack-dev-server')
  const config = require('./webpack.config')

  new WebpackDevServer(webpack(config), {
    historyApiFallback: true
  }).listen(3000, 'localhost', function (err, res) {
    err ? console.log(err) : console.log("Listening at localhost:3000")
  })

} else {

  const path = require('path')
  const express = require('express')
  const app = express()
  const indexPath = path.join(__dirname, 'dist/index.html')
  const port = (process.env.PORT || 3000)

  app.use(express.static(__dirname + '/dist'))
  app.get('/', function (_, res) { res.sendFile(indexPath) })
  app.listen(port)

  console.log('Server started on: ' + port)
}
