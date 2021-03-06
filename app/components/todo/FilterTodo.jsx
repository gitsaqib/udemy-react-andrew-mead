var React = require('react')
var ReactDom = require('react-dom')

var FilterTodo = React.createClass({

    render : function(){
      const todo = this.props.todo;
      return (
        <div className="container__header">
        <div>
          <input ref="query" ></input>
        </div>
        <p>
          <label>
            <input type="checkbox" ref="showCompleted" />
            Show completed todos
          </label>
        </p>
      </div>
      );
  }
});

module.exports = FilterTodo;
