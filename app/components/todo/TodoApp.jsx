var React = require('react')
var ReactDom = require('react-dom')
var {Provider} = require('react-redux');
var TodoContainer = require('./TodoContainer')
var {Configure} = require('../../data/store');
var store = Configure();

store.subscribe(()=>{
    console.log("New State : ",store.getState());
  }
);
store.dispatch({type:"ADD_TODO",todo : {todo:"Drop kids to School"}});
store.dispatch({type:"ADD_TODO",todo : {todo:"Go for shopping"}});

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
