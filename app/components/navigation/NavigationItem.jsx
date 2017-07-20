var React = require('react')
var ReactDOM = require('react-dom')

var NavigationItem = React.createClass(
  {
      render : function(){
                return (<a >{this.props.name} </a>);
      }
  }
);
module.exports = NavigationItem;
