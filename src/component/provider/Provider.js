import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import toastr from 'toastr';

import $ from 'jquery';
require('materialize-css/dist/css/materialize.css');
window.jQuery = require('jquery');
window.$ = require('jquery');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');

import header from '../../../assets/truck_page/truck_header.png';
import truckFace from '../../../assets/truck_page/truck_face.png';
import truckTop from '../../../assets/truck_page/truck_top.png';

var Web3 = require('web3');
var web3 = new Web3('ws://localhost:8545');
import address from '../address';

let abi = address.abi;
let truffleAddress = address.truffleAddress;

class Provider extends Component {
  // INIT State
  constructor(props) {
    super(props);
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
    let test = web3.eth.contract(abi).at(truffleAddress);
    this.state = test;
  }
  componentDidMount() {
    $(window).scrollTop(0);
    console.log("loading component....");

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });

  }
  getData() {
    console.log("trying to hit web3...");
    // this.props.testApi();
    // debugger;
    // console.log(test.warehouses());
    this.state.warehouses((err,res) => {
      console.log(res);
      // web3.toUtf8(res[5][1]);
    })
  }
  postData() {
    // debugger;
    this.state.purchaseWarehouseSpace(web3.eth.coinbase, 100, 1, {from:web3.eth.coinbase, value:100}, (err,res) => {
      console.log(res);
    })
  }
  grabData() {
    let start = document.getElementById('start_city').value;
    let end = document.getElementById('end_city').value;
    let startDate = document.getElementById('start-date-input').value;
    let endDate = document.getElementById('end-date-input').value;
    let perCost = document.getElementById('per-cost').value;
    let total = document.getElementById('price').value;
    let startTimeStamp = new Date(startDate).getTime() / 1000;
    let endTimeStamp = new Date(endDate).getTime() / 1000;
    //
    // debugger;
    console.log(total,perCost,start, end, startTimeStamp,endTimeStamp);
    this.state.addVehicle(total, perCost, start, end, startTimeStamp, endTimeStamp, {gas:500000, from:web3.eth.coinbase}, (err, res) =>{
      // console.log(err);
      // debugger;
      // console.log(res);
      console.log("You made it home boy!");
      console.log(res);
      toastr.success('Service Created!');
      toastr.success('Transaction hash: '+ res);
    })
    //uint256 _cubicFeet, uint pricePerCubicFootPerHour, bytes32 startingPosition, bytes32 endingPosition, uint beginDate, uint endDate
  }


  render() {
    return (
      <div className="provider-page">
        <div className="z-depth-1 provider-header"><img className="my-image" src={ header } /></div>
        <div className="row">
          <div className="col s6">
            <img className="z-depth-2 my-image" src={ truckFace } />
          </div>
          <div className="col s6">
            <img className="z-depth-2 my-image" src={ truckTop } />
          </div>
        </div>

        <div className="card-content card amber accent-1">

          <div className="row card-inside">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
              <i className="fa fa-car" aria-hidden="true"></i>
                <i className="material-icons prefix"></i>
                <label className="lable-text">
                Start Point City</label>
                <input id="start_city" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
                <i className="material-icons prefix"></i>
                <label className="lable-text">
                End Point City</label>
                <input id="end_city" type="tel" className="validate" />
              </div>
            </div>
          </form>
          <div className="dates  card-inside">
          <div className="row">
          <form className="col s12">
          <div className="row">
          <div className="start-date col s6">
          <i className="fa fa-calendar-minus-o" aria-hidden="true"></i>
          <input id="start-date-input" type="text" className="datepicker" />
          <label className="lable-text">Start Date</label>
          </div>
          <div className="end-date col s6">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <input id="end-date-input" type="text" className="datepicker" />
          <label className="lable-text">End Date</label>
          </div>
          </div>
          </form>
          </div>
          </div>

          </div>

        </div>

        <div className="card-content card light-blue lighten-4">
          <div className="row card-inside">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                <i className="fa fa-connectdevelop" aria-hidden="true"></i>
                  <i className="material-icons prefix"></i>
                  <label className="lable-text">
                  Price Per Unit (ETH)</label>
                  <input id="per-cost" type="text" className="validate" />
                </div>
                <div className="input-field col s6">
                <i className="fa fa-truck" aria-hidden="true"></i>
                  <i className="material-icons prefix"></i>
                  <label className="lable-text">
                  Total Space (Cubic foot)</label>
                  <input id="price" type="tel" className="validate" />
                </div>
              </div>
            </form>
          </div>

      </div>

      <div className="submit-main">
        <a className="waves-effect teal lighten-1 btn-large" onClick={()=>{this.grabData()}}>
          <i className="fa fa-cubes" aria-hidden="true"></i>
        </a>
      </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger;
  return { block: state.auth }
}
// {require('../../assets/splash_img.png')}
export default connect(mapStateToProps, actions)(Provider);
// <a className="waves-effect waves-light btn" onClick={() => this.getData()}>HIT ME</a>

// <div>
//   <p>This is the provider page</p>
//   <a onClick={() => {this.getData()}}>testCLick</a>
//   <br />
//   <a onClick={() => {this.postData()}}>postCLick</a>
// </div>
