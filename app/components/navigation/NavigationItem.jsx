var React = require('react')
var ReactDOM = require('react-dom')
var {Link}  = require('react-router')
var NavigationItem = React.createClass(
  {
      render : function(){
                return (<Link to={this.props.to} > ~ {this.props.name} ~ : </Link>);
      }
  }
);
module.exports = NavigationItem;
