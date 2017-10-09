import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

var Main = require('../components/Main')
var ClientList = require('../components/client/ClientList')
var Client = require('../components/client/Client')
var User = require('../components/user/User')
var UserList = require('../components/user/UserList')
var SigninInfo = require('../components/user/SigninInfo')
var Report = require('../components/report/Report')
var Countdown = require('../components/countdown/Countdown')
var TodoApp = require('../components/todo/TodoApp')

    var Routes = React.createClass(
    {
        render : function(){
      return (<Router history={hashHistory}>
      <Route path="/" component={Main} >
        <IndexRoute component={TodoApp} />
        <Route path="Client" component={Client} />
        <Route path="ClientList" component={ClientList} />
        <Route path="UserList" component={UserList} />
        <Route path="User" component={User} />
        <Route path="Report" component={Report} />
        <Route path="Countdown" component={Countdown} />
        <Route path="Todo" component={TodoApp} />
      </Route>
      <Route path="/Signin" component={SigninInfo} />
  </Router>);
  }
});
module.exports = Routes;
