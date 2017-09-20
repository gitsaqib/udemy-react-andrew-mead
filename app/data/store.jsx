var redux = require('redux');
var {todos} = require('./reducers');

export var Configure = () => {
  var reducer = redux.combineReducers(
    {
      todos: todos
    }
  );
  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
debugger;
 return store;
};
