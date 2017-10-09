var React = require('react')
var ReactDom = require('react-dom')
var {Provider} = require('react-redux');
var TodoContainer = require('./TodoContainer')
var Actions = require('../../actions/Actions')
var {Configure} = require('../../data/store');
var store = Configure();

store.subscribe(()=>{
    console.log("New State : ",store.getState());
  }
);
//
var todo1 = {todo:"Drop kids to School"};
var todo2 = {todo:"Go for shopping"}
store.dispatch(Actions.addTodo(todo1));
store.dispatch(Actions.addTodo(todo2));

var TodoApp = React.createClass({
  render : function() {
//    debugger;
    var returnValue = (
      <Provider store={store}>
          <TodoContainer/>
        </Provider>      );
    return returnValue;
  }
});

module.exports = TodoApp;
