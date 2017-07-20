var GreetingMessage = React.createClass({
    render : function () {
      return (
      <div>
            <h1> submitted value :  {this.props.userName}  </h1>
            <p>
               Message : {this.props.message}
            </p>
      </div>
      );
    }
});
var GreetingForm = React.createClass({

  submittingMyForm : function(e){
    e.preventDefault();
    var enteredValue = this.refs.inputField.value;

    if(enteredValue!=null && enteredValue.length >0) {
      this.refs.inputField.value = "";
      this.updateCaller(enteredValue);
    }
  },

  updateCaller : function(name) {
    this.props.callBack(name);
  },

  render : function() {
      return (
      <form onSubmit={this.submittingMyForm}>
        <p>
          <input type="text" ref="inputField"></input>
          <button> Display What is entered.</button>
        </p>
      </form>
      );
    }
});
var Greeting = React.createClass(
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
              <GreetingMessage userName = {this.state.name} message = {this.state.message} />
              <GreetingForm callBack= {this.updateName} />
          </div>

      );
    }
  });
ReactDOM.render(
  <Greeting/>,
  document.getElementById('app')
)
