var React = require('react')
var ReactDom = require('react-dom')
var {connect} = require('react-redux');
var DataUtility = require('../../../api/DataUtility');
var Actions = require('../../actions/Actions')

var TodoForm = React.createClass({

  addTodo:function(){
      var {dispatch} = this.props;
      var text=this.refs.todo.value;
      this.refs.todo.value = "";
//      dispatch({type:"ADD_TODO",text});
      var todo = { todo:text}
      var asyncCall = (dispatch,getState)=>{
          var promise = DataUtility.asynchronousSaveToDo(todo);
          promise.then(()=>dispatch(Actions.addTodo(todo)));
      };
      dispatch(asyncCall);
  },
  render : function(){
    return (
      <div className="container__footer">
        <input ref="todo" placeholder="Enter Todo" ></input>
        <button className="button expanded" onClick={this.addTodo}> Add </button>
      </div>
    )
  }
});
module.exports = connect()(TodoForm);