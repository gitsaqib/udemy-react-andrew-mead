var React = require('react')
var ReactDOM = require('react-dom')
var {Link,IndexLink}  = require('react-router')

var Logo = () =>
{
      return (<IndexLink to="/"  className="menu-text" activeClassName="menu-text">Central Server</IndexLink>);
};
module.exports = Logo;
