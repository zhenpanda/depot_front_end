import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import '../css/style.css';

class App extends React.Component {
  render() {
    return (
      <div className="">
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(App);
