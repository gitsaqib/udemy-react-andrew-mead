var React = require('react')
var ReactDom = require('react-dom')

var TodoContainer = require('./TodoContainer')

var TodoApp = React.createClass({

  getInitialState : function(){
      var defaultState = {todos : [
            {id:1,todo:"Visit School"},
            {id:2,todo:"Study React"},
            {id:3,todo:"Baby Bye bye .."}
          ]
      };
    return defaultState;
  },

  render : function() {
    return (<TodoContainer state={this.state}/>);
  }
});

module.exports = TodoApp;
