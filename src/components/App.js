// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from '../common/header.js';

class App extends React.Component { // App is a container component
  render() { // React render method
    return (
      <div className="container-fluid">
        <Header />
        <br/>
        {this.props.children}
      </div>
    );
  }
} 

App.propTypes = { // propTypes validation
  children: PropTypes.object.isRequired // children is an object
};

export default App; // export App as the default of this file