// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from '../common/header.js';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <br/>
        {this.props.children}
      </div>
    );
  }
} 

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;