var React = require('react')
var ReactDOM = require('react-dom')
var NavigationItem = require('./NavigationItem')

var NavigationItemList = ()=>
  {
        return (
          <ul className="menu">
            <li>
                    <NavigationItem to="/ClientList" name="ClientList"></NavigationItem>
            </li>
            <li>
                    <NavigationItem to="/UserList" name="UserList"></NavigationItem>
            </li>
            <li>
                    <NavigationItem to="/User" name="SaveUser"></NavigationItem>
            </li>
            <li>
                    <NavigationItem to="/Report" name="Report"></NavigationItem>
            </li>
            <li>
                    <NavigationItem to="/Countdown" name="Countdown"></NavigationItem>
            </li>
          </ul>
        );
  }
module.exports = NavigationItemList;
