var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyDrlZ3UAxOSGGl6ywQfe5ScV7PC43CTFjY"'
})
