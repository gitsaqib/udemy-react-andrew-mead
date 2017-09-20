var React = require('react')
var ReactDom = require('react-dom')

var TodoForm = React.createClass({

  render : function(){
    return (
      <div className="container__footer">
        <input ref="todo" placeholder="Enter Todo" ></input>
        <button className="button expanded"> Add </button>
      </div>
    )
  }
});

module.exports = TodoForm;
