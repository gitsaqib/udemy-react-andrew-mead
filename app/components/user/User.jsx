var React = require('react')
var ReactDOM = require('react-dom')
var UserForm = require('./UserForm')
var Message = require('../message/Message')
var OpenweatherMap = require('../../../api/OpenweatherMap')

var User = React.createClass(
  {
      getDefaultProps : function() {
        var returnValue = {
          message : "",
          messageType : 0
        };
        return returnValue;
      },
      getInitialState : function(){
        var initialState = {message : this.props.message,messageType : this.props.messageType};
        return initialState;
      },
      displayResults : function(location) {
        // debugger;
        var currentContext = this;
        // currentContext.props.callback("Loading data for "+location+"...");
        this.setState({message : ("Loading data for "+location+"..."),messageType : 0});
        OpenweatherMap.getTemp(location).then(
          function(data){
            // debugger;
            // currentContext.props.callback(name+" "+data);
            console.log(data);
            currentContext.setState({message : (location+" "+data),messageType : 0});
          },function(error){
            debugger;
            console.log("City Not Found");
            //currentContext.props.callback("City Not Found");
            console.log(error);
            currentContext.setState({message : "City Not Found",messageType : 1});
          });


      },
      render : function(){
                return (
                  <div >
                      <h1 className="text-center">User  </h1>
                      <UserForm callback={this.displayResults}/>
                      <Message message={this.state.message} messageType={this.state.messageType}></Message>
                  </div>
                );
      }
  }
);
module.exports = User;
