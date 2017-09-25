//var redux = require('redux');
//var {todos} = require('./reducers');
import {todos} from './reducers';
import * as redux from 'redux';
import thunk from 'redux-thunk';

export var Configure = () => {
  var reducer = redux.combineReducers(
    {
      todos: todos
    }
  );
  var store = redux.createStore(reducer, redux.compose(
          redux.applyMiddleware(thunk),
          window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
//debugger;
 return store;
};