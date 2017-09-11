var redux = require('redux');
var {todos} = require('./reducers');

export var configure = () => {
  var reducer = redux.combineReducers(
    {
      todos: todos
    }
  );
  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
