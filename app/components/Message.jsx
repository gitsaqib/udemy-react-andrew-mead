var React = require('react')
var ReactDOM = require('react-dom')

var Message = React.createClass(
  {
      defaultProps : function() {
        return ({message : ""});
      },
      render : function(){
        return (
          <h3 className="text-center">
            {this.props.message}
          </h3>
        );
      }
  }
);
module.exports = Message;
