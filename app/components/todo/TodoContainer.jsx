var React = require('react')
var ReactDom = require('react-dom')

var TodoList = require('./TodoList')
var TodoForm = require('./TodoForm')
var FilterTodo = require('./FilterTodo')

var TodoContainer = React.createClass({

  render : function() {
    console.log("props : ",this.props);
    return (
      <div className = "small-6 large-centered columns">
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
          <FilterTodo />
          <TodoList />
          <TodoForm />
        </div>
      </div>
    </div>
  </div>

            );
  }
});

module.exports = TodoContainer;
