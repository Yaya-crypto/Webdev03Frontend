import * as at from "../actions/actionTypes";

// REDUCER;
const allTasks = (state=[], action) => {
  switch (action.type) {
    case at.FETCH_ALL_TASKS:
      return action.payload;
    case at.EDIT_TASK:
      return state.map(task => { 
        return (
          course.id===action.payload.id ? action.payload : task
        );
      });
    default:
      return state;
  }
};

export default allTasks;