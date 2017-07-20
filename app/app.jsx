var React = require('react')
var ReactDOM = require('react-dom')
var {Route,Router,IndexRoute,hashHistory}  = require("react-router")

var Main = require('./components/Main')
var ClientList = require('./components/ClientList')
var SaveClient = require('./components/SaveClient')
var UserList = require('./components/UserList')
var SaveUser = require('./components/SaveUser')


ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <Route path="SaveClient" component={SaveClient} />
        <Route path="ClientList" component={ClientList} />
        <Route path="UserList" component={UserList} />
        <Route path="SaveUser" component={SaveUser} />
        <IndexRoute component={ClientList} />
      </Route>

  </Router>,
  document.getElementById('app')
)
