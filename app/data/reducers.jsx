export var todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {id:state.length,todo : action.text,status:1}
      ];
    // case 'TOGGLE_TODO':
    //   return state.map((todo) => {
    //     if (todo.id === action.id) {
    //       var nextCompleted = !todo.completed;
    //
    //       return {
    //         ...todo,
    //         completed: nextCompleted,
    //         completedAt: nextCompleted ? moment().unix() : undefined
    //       };
    //     }
    //   });
    default:
      return state;
  }
};
