var React = require('react')

var GreeterForm = React.createClass({

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
module.exports = GreeterForm;
