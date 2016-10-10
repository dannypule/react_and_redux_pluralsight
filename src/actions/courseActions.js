import * as types from './actionTypes'; // import all actions from actionTypes
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){ // export action creator function
  return { // return action 
    type: types.LOAD_COURSES_SUCCESS, 
    courses 
  };
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}