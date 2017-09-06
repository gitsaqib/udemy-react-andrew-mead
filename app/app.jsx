var React = require('react')
var ReactDOM = require('react-dom')
var {Route,Router,IndexRoute,hashHistory}  = require("react-router")

var Main = require('./components/Main')
var ClientList = require('./components/client/ClientList')
var Client = require('./components/client/Client')
var User = require('./components/user/User')
var UserList = require('./components/user/UserList')
var Report = require('./components/report/Report')
var Countdown = require('./components/countdown/Countdown')
var TodoApp = require('./components/todo/TodoApp')

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!./styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <IndexRoute component={ClientList} />
        <Route path="Client" component={Client} />
        <Route path="ClientList" component={ClientList} />
        <Route path="UserList" component={UserList} />
        <Route path="User" component={User} />
        <Route path="Report" component={Report} />
        <Route path="Countdown" component={Countdown} />
        <Route path="Todo" component={TodoApp} />
      </Route>
  </Router>,
  document.getElementById('app')
)
