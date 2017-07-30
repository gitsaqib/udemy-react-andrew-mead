var React = require('react')
var ReactDOM = require('react-dom')
var {Link,IndexLink}  = require('react-router')
var MessageModal = React.createClass(
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
  /*
    render : function(){
        return (
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>Some Title</h4>
          <p>Our error message!</p>
          <p>
            <button className="button hollow" data-close="">
              Okay
            </button>
          </p>
        </div>
        );
      }
  }*/
);

module.exports = MessageModal;
