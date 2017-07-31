var React = require('react')
var ReactDOM = require('react-dom')
var {Route,Router,IndexRoute,hashHistory}  = require("react-router")

var Main = require('./components/Main')
var ClientList = require('./components/client/ClientList')
var SaveClient = require('./components/client/SaveClient')
var User = require('./components/user/User')
var UserList = require('./components/user/UserList')
var Report = require('./components/report/Report')

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!./styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <Route path="SaveClient" component={SaveClient} />
        <Route path="ClientList" component={ClientList} />
        <Route path="UserList" component={UserList} />
        <Route path="User" component={User} />
        <Route path="Report" component={Report} />
        <IndexRoute component={ClientList} />
      </Route>
  </Router>,
  document.getElementById('app')
)
