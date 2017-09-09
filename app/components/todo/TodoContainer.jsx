var React = require('react')
var ReactDom = require('react-dom')

var TodoList = require('./TodoList')
var TodoForm = require('./TodoForm')

var TodoContainer = React.createClass({

  render : function() {
    return (
      <div>
          <TodoList todos={this.props.state.todos}></TodoList>
          <TodoForm></TodoForm>
      </div>
    );
  }
});

module.exports = TodoContainer;
