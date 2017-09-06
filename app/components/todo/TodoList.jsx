var React = require('react')
var ReactDom = require('react-dom')
var Todo = require('./Todo')

var TodoList = React.createClass({

  render : function(){
    var {todos} = this.props;
    const todosList = this.props.todos.map(todo => <Todo key={todo.id} todo={todo}></Todo> );
    return (<ul>{todosList}</ul>)
  }
});

module.exports = TodoList;
