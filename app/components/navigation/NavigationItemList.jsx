var React = require('react')
var ReactDOM = require('react-dom')
var NavigationItem = require('./NavigationItem')

var NavigationItemList = React.createClass(
  {
      render : function(){
        return (
          <div>
            <NavigationItem to="/" name="Home"></NavigationItem>
            <NavigationItem to="/ClientList" name="ClientList"></NavigationItem>
            <NavigationItem to="/SaveClient" name="SaveClient"></NavigationItem>
            <NavigationItem to="/User" name="User"></NavigationItem>
          </div>
        );
      }
  }
);
module.exports = NavigationItemList;
