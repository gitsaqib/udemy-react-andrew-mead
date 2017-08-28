var React = require('react')
var ReactDOM = require('react-dom')
var MessageSimple = require('./MessageSimple')
var MessageModal = require('./MessageModal')
var Message = React.createClass(
  {
      defaultProps : function() {
        var propsOject = { messageType : "0", message : ""};
        console.log(propsOject.messageType +" : "+propsOject.message);
        debugger;
        return propsOject;
      },
      render : function(){
        debugger;
        console.log(this.props.messageType +" : "+this.props.message);
        var component = null;
        if(parseInt(this.props.messageType) == 1) {
          console.log(this.props.messageType +" 1: "+this.props.message);
          component = <MessageModal message = {this.props.message} />
        }else
        {
          console.log(this.props.messageType +" 0: "+this.props.message);
          component = <MessageSimple message = {this.props.message} />
        }
        return (component);
      }
  }
);
module.exports = Message;
