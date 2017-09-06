var React = require('react')
var ReactDom = require('react-dom')

var Todo = React.createClass({

    render : function(){
      const todo = this.props.todo;
      return (
        <li >{todo.id} . {todo.todo}</li>
      );
  }
});

module.exports = Todo;
