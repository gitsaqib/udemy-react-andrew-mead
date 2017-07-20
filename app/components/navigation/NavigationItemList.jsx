var React = require('react')
var ReactDOM = require('react-dom')
var NavigationItem = require('./NavigationItem')

var NavigationItemList = React.createClass(
  {
      render : function(){
        return (
          <div>
            <NavigationItem name="React Weather"></NavigationItem>
            <NavigationItem name="Get Weather"></NavigationItem>
            <NavigationItem name="About"></NavigationItem>
            <NavigationItem name="Example"></NavigationItem>
          </div>
        );
      }
  }
);
module.exports = NavigationItemList;
