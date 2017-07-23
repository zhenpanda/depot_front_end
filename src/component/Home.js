import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import splash from '../../assets/splash_img.png';

class Home extends Component {
  // INIT State
  componentWillMount() {
    console.log("loading component....");
  }
  getData() {
    console.log("trying to hit test api...");
    this.props.testApi();
  }

  render() {
    return (
      <div className="home">
        <h1>This is the home page!</h1>

      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger;
  return { board: state.auth }
}

export default connect(mapStateToProps, actions)(Home);
// <a className="waves-effect waves-light btn" onClick={() => this.getData()}>HIT ME</a>
