var React = require('react')
var ReactDOM = require('react-dom')
var {Route,Router,IndexRoute,hashHistory}  = require("react-router")

var Main = require('./components/Main')
var ClientList = require('./components/ClientList')
var NewClient = require('./components/NewClient')

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <Route path="NewClient" component={NewClient} />
        <IndexRoute component={ClientList} />
      </Route>

  </Router>,
  document.getElementById('app')
)
