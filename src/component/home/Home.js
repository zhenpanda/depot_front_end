import React, { Component } from 'react';
import {Link} from 'react-router';

// import splash from '../../../assets/splash_img.png';
import header from '../../../assets/home_page/home_header.png';
import depot from '../../../assets/home_page/depot_header.png';
import open from '../../../assets/home_page/open_header.png';
import splash from '../../../assets/home_page/splash_main.png';
import provider from '../../../assets/home_page/provider_img.png';
import requestor from '../../../assets/home_page/requestor_img.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header"><img className="my-image" src={ header } /></div>
        <div className="z-depth-2"><img className="my-image" src={ depot } /></div>
        <div className="z-depth-1"><img className="my-image" src={ open } /></div>
        <div className="z-depth-1"><img className="my-image" src={ splash } /></div>
        <div className="home-footer yellow-color">
        <div className="row">
          <div className="col s1"></div>
          <div className="col s4">
            <Link to="provider">
              <img className="waves-effect orange lighten-1 btn" src={ provider } />
              <div className="provider-text">
                <div>Create logistic services</div>
                <div>for customers to move goods.</div>
              </div>
            </Link>
          </div>
          <div className="col s2"></div>
          <div className="col s4">
            <Link to="provider">
              <img className="waves-effect grey lighten-5 btn" src={ requestor } />
              <div className="requestor-text">
                <div>Gain accesss to logistics</div>
                <div>and supply chain solutions.</div>
              </div>
            </Link>
          </div>
          <div className="col s1"></div>
        </div>
        </div>
      </div>
    );
  }
}
// <h2><Link to="provider" className="btn btn-primary btn-lg">Providers</Link></h2>
export default Home;
