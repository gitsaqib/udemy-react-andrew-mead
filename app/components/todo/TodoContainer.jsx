var React = require('react')
var ReactDom = require('react-dom')

var TodoList = require('./TodoList')
var TodoForm = require('./TodoForm')

var TodoContainer = React.createClass({

  render : function() {
    return (
      <div>
          <FilterTodo ></FilterTodo>
          <TodoList ></TodoList>
          <TodoForm ></TodoForm>
      </div>
    );
  }
});

module.exports = TodoContainer;
