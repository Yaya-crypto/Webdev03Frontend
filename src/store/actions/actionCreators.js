import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All instructors
export const fetchAllEmployees = (employees) => {
    return {
        type: at.FETCH_ALL_EMPLOYEES,
        payload: employees,
    };
};
  
// All tasks
export const fetchAllTasks = (tasks) => {
    return {
        type: at.FETCH_ALL_TASKS,
        payload: tasks,
    };
};
  
export const editTask = (task) => {
    return {
        type: at.EDIT_TASK,
        payload: task,
    };
};

//Single task
export const fetchTask = (task) => {
    return {
        type: at.FETCH_TASK,
        payload: task,
    };
};