var React = require('react')
var ReactDOM = require('react-dom')
var {Link,IndexLink}  = require('react-router')
var MessageModal = React.createClass(
  {
    getDefaultProps : function (){
      return ({
        title : "error",
        message : ""
      });
    },
    componentDidMount: function () {
      console.log("componentDidMount");
      var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
    },
    render : function(){
      console.log("render");
        return (
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>Some Title</h4>
          <p>{this.props.message}</p>
          <p>
            <button className="button hollow" data-close="">
              Okay
            </button>
          </p>
        </div>
        );
      }
  }
);

module.exports = MessageModal;
