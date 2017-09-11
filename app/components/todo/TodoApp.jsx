var React = require('react')
var ReactDom = require('react-dom')
var Provider = require('react-redux')
var TodoContainer = require('./TodoContainer')
var store = require('../../data/store').configure(); //{configure} = require('../../data/store');
// var store = configure();
store.subscribe(
  ()=>{
    console.log("New State : ",store.getState());
  }
);
store.dispatch({type:"ADD_TODO",text:"hello"});

var TodoApp = React.createClass({
  render : function() {
    return (
        <div>{store.getState().todos.length}</div>
      );
  }
});

module.exports = TodoApp;
