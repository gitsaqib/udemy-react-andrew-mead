var React = require('react')

var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass(
{
  getDefaultProps : function() {
    var returnValue = { name : "React" , message : "Hello from React"};
    return returnValue;
  },
  getInitialState : function(){
    var initialState = { name : this.props.name , message : this.props.message};
    return initialState;
  },
  updateName : function(enteredValue){
    var newState = { name : enteredValue };
    this.setState(newState);
  },
  render : function (){
      return (
          <div>
            <GreeterMessage userName = {this.state.name} message = {this.state.message} />
            <GreeterForm callBack= {this.updateName} />
        </div>

    );
  }
});
module.exports = Greeter;
