import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions'; // import all the exported functions from courseActions
import CourseList from './CourseList'

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context); // get the props and context from the parent class
  }
  
  courseRow(course, index) { // child function called by render
    return <div key={index}>{course.title}</div>; // individual div with course.title text output
  }
  
  render() { // React render function
    const {courses} = this.props;
    return (
      <div> 
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = { // propTypes that are in use by CoursesPage component - propTypes validation
  courses: PropTypes.array.isRequired, // courses is an array
  actions: PropTypes.object.isRequired // actions is an object
};

function mapStateToProps(state, ownProps) { 
  return {
    courses: state.courses // courses array will be available on props of CoursesPage component
  };
}

function mapDispatchToProps(dispatch){ // connect() will pass in dispatch
  return {
    actions: bindActionCreators(courseActions, dispatch) // use bindActionCreators from `react-redux` library
    // createCourse: course => dispatch(courseActions.createCourse(course)) // initial way of doing it
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // connect state and props to CoursesPage container component

//----------------------
// dispatch is function that allows you to fire off your actions
// So I will be able to dispatch different actions that we've
// defined in the courseActions file