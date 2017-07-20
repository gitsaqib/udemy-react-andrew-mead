var React = require('react')
var ReactDOM = require('react-dom')
var {Link,IndexLink}  = require('react-router')
var NavigationItem = React.createClass(
  {
      defaultProps : function (){
        isIndex: false
      }
      ,render : function(){
        var link = null;
        if(this.props.isIndex) {
          link = (<IndexLink to={this.props.to}  activeClassName="active"> ~ {this.props.name} ~ : </IndexLink>);
        }else {
          link = (<Link to={this.props.to}  activeClassName="active"> ~ {this.props.name} ~ : </Link>);
        }
        return (link);
      }
  }
);
module.exports = NavigationItem;
