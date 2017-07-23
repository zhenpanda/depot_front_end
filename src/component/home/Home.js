import React, { Component } from 'react';
import {Link} from 'react-router';

import splash from '../../../assets/splash_img.png';

class Home extends Component {
  // INIT State
  render() {
    return (
      <div className="home">
        <div>
          <h1>Welcome to Depot!</h1>
          <h2><Link to="provider" className="btn btn-primary btn-lg">Providers</Link></h2>
          <br />
        </div>
      </div>
    );
  }
}
export default Home;
