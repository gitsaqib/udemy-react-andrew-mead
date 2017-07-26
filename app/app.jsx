var React = require('react')
var ReactDOM = require('react-dom')
var {Route,Router,IndexRoute,hashHistory}  = require("react-router")

var Main = require('./components/Main')
var ClientList = require('./components/ClientList')
var SaveClient = require('./components/SaveClient')
var User = require('./components/user/User')
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <Route path="SaveClient" component={SaveClient} />
        <Route path="ClientList" component={ClientList} />
        <Route path="User" component={User} />
        <IndexRoute component={ClientList} />
      </Route>

  </Router>,
  document.getElementById('app')
)
