export var todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {id:state.length,todo : action.text,status:1}
      ];
    default:
      return state;
  }
};
