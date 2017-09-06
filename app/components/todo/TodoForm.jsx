var React = require('react')
var ReactDom = require('react-dom')

var TodoForm = React.createClass({

  render : function(){
    return (
      <div>
        <input ref="todo" placeholder="Enter Todo" ></input>
        <button > Add </button>
      </div>
    )
  }
});

module.exports = TodoForm;
