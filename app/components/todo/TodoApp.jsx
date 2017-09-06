var React = require('react')
var ReactDom = require('react-dom')

var TodoList = require('./TodoList')
var TodoForm = require('./TodoForm')

var TodoApp = React.createClass({

  getInitialState : function(){
      var defaultState = {todos : [
            {id:1,todo:"Visit School"},
            {id:2,todo:"Study React"},
            {id:3,todo:"OO Bye bye"}
          ]
      };
    return defaultState;
  },

  render : function() {
    return (
      <div>
          <TodoList todos={this.state.todos}></TodoList>
          <TodoForm></TodoForm>
      </div>
    );
  }
});

module.exports = TodoApp;
