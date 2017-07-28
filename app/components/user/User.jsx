var React = require('react')
var ReactDOM = require('react-dom')
var UserForm = require('./UserForm')
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
                      <h1 className="text-center">Save User  </h1>
                      <UserForm callback={this.valueReceiver}/>
                      <Message message={this.state.message} ></Message>
                  </div>
                );
      }
  }
);
module.exports = User;
