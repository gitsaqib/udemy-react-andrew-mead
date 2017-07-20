var React = require('react')
var ReactDOM = require('react-dom')

var Message = React.createClass(
  {
      defaultProps : function() {
        return ({message : ""});
      },
      render : function(){
        return (
          <div>
            {this.props.message}
          </div>
        );
      }
  }
);
module.exports = Message;
