var React = require('react')
var ReactDOM = require('react-dom')
var SaveUser = require('./SaveUser')
var Message = require('../Message')

var User = React.createClass(
  {
      getDefaultProps : function() {
        var returnValue = { message : ""};
        return returnValue;
      },
      getInitialState : function(){
        var initialState = {message : this.props.message};
        return initialState;
      },
      valueReceiver : function(value) {
        this.setState({message : value});
      },
      render : function(){
                return (
                  <div >
                      <span>User </span>
                      <SaveUser callback={this.valueReceiver}/>
                      <Message message={this.state.message} ></Message>
                  </div>
                );
      }
  }
);
module.exports = User;
