var Greeting = React.createClass(
  {
    getDefaultProps : function() {
      var returnValue = { name : "React Default" , message : "Default Message"};
      return returnValue;
    },
    getInitialState : function(){
      var initialState = { name : this.props.name , message : this.props.message};
      return initialState;
    },
    submittingMyForm : function(e){
      e.preventDefault();
      var enteredValue = this.refs.inputField.value;
      var newState = { name : enteredValue };
      this.setState(newState);
    },
    render : function (){
        return (
          <form onSubmit={this.submittingMyForm}>
            <div>
            <h1> submitted value : {this.state.name} message : {this.state.message} </h1>
            <p>
              <input type="text" ref="inputField"></input>
              <button> Display What is entered.</button>
            </p>
          </div>
          </form>
      );
    }
  });
ReactDOM.render(
  <Greeting name={"sa"}/>,
  document.getElementById('app')
)
