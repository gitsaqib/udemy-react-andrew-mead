var React = require('react')
var ReactDOM = require('react-dom')
var {Link,IndexLink}  = require('react-router')

var MessageSimple = React.createClass(
  {
    componentDidMount: function () {
      var modal = new Foundation.Reveal($('#error-modal'));
      //modal.open();
    },
    render : function(){
        return (
          <h3>{this.props.message}</h3>
        );
      }
  }
);

module.exports = MessageSimple;
