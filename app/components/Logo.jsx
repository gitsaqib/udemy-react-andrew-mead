var React = require('react')
var ReactDOM = require('react-dom')
var {Link,IndexLink}  = require('react-router')

var Logo = () =>
{
      return (
                <IndexLink to="/"  activeClassName="active">Logo</IndexLink>
      );
};
module.exports = Logo;
