var React = require('react')
var ReactDOM = require('react-dom')
var NavigationItem = require('./NavigationItem')

var NavigationItemList = ()=>
  {
        return (
          <div>
            <NavigationItem isIndex={true} to="/" name="Home"></NavigationItem>
            <NavigationItem to="/ClientList" name="ClientList"></NavigationItem>
            <NavigationItem to="/SaveClient" name="SaveClient"></NavigationItem>
            <NavigationItem to="/User" name="User"></NavigationItem>
          </div>
        );
  }
module.exports = NavigationItemList;
