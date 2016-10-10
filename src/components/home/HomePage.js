import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component { // HomePage is a container component
  render(){
    return (
      <div className="jumbotron">
        <h1>Pluralsight Admin</h1>
        <p>React, Redux, React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage; // export HomePage