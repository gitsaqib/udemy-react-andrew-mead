var React = require('react')
var ReactDOM = require('react-dom')
var SaveUser = require('./SaveUser')

var User = React.createClass(
  {
      render : function(){
                return (
                  <div >
                      <span>User </span>
                      <SaveUser />
                  </div>
                );
      }
  }
);
module.exports = User;
