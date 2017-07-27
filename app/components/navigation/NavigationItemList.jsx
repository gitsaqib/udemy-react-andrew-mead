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
                    <NavigationItem to="/SaveClient" name="SaveClient"></NavigationItem>
            </li>
            <li>
                    <NavigationItem to="/User" name="User"></NavigationItem>
            </li>
          </ul>
        );
  }
module.exports = NavigationItemList;
