import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import toastr from 'toastr';

import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
require('materialize-css/dist/css/materialize.css');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');

import header from '../../../assets/user_page/user_header.png';

var Web3 = require('web3');
var web3 = new Web3('ws://localhost:8545');
import address from '../address';

let abi = address.abi;
let truffleAddress = address.truffleAddress;

class Requestor extends Component {
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
    let vehicles = [];
    function timeConverter(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
    }
    function humanize(warehouses, dates) {
      let readableWarehouse = [];
      let properties = [
        { name: 'spaceAvailable', type: 'number' },
        { name: 'totalSpace', type: 'number' },
        { name: 'pricePerCubicFootPerDuration', type: 'number' },
        { name: 'owner', type: 'address' },
        { name: 'beginningCity', type: 'string' },
        { name: 'endingCity', type: 'string' }
      ];

      let dateProperties = [
        { name: 'beginDate', type: 'date' },
        { name: 'endDate', type: 'date' }
      ];

      for (var j = 0; j < properties.length; j++) {
        for (var i = 0; i < warehouses[0].length; i++) {
          readableWarehouse[i] = readableWarehouse[i] || {};
          if (properties[j].type === 'string') warehouses[j][i] = web3.toUtf8(warehouses[j][i]);
          if (properties[j].type === 'number') warehouses[j][i] = warehouses[j][i].toString();
          readableWarehouse[i][properties[j].name] = warehouses[j][i];
        }
      }
      if (dates) {
        for (var j = 0; j < dateProperties.length; j++) {
          for (var i = 0; i < warehouses[0].length; i++) {
            // console.log(warehouses[j][i]);
            warehouses[j][i] = new Date(dates[j][i].toString() * 1000);
            readableWarehouse[i][dateProperties[j].name] = warehouses[j][i];
            // console.log(readableWarehouse[i][dateProperties[j].name]);
          }
        }
      }
      return readableWarehouse;
    }
    this.state.vehicles((err,res) => {
      this.state.vehicleDates((err1,res1) => {
        // console.log(humanize(res,res1));
        let data = humanize(res,res1);
        // console.log(data);
        let cities = {};
        data.map((e) => {
          // console.log(e.beginningCity);
          if(!cities[e.beginningCity]) cities[e.beginningCity] = null;
        })
        // console.log(cities);

        self = this;
        $('#autocomplete-input').autocomplete({
          data: cities,
          limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
          onAutocomplete: function(val) {
            self.state.vehiclesByCity(val, (err, res) => {
              // console.log(err);
              self.state.vehicleDatesByCity(val, (err1,res1) => {
                // debugger;
                // console.log(humanize(res,res1));
                let data = humanize(res,res1);
                let btnAry = [];
                $( "#attach-to-me" ).empty();
                data.map((e,i,a)=>{
                  $( "#attach-to-me" ).append(
                    "<ul class='collection chooices'>"
                      +"<li class='collection-item z-depth-1 waves-effect waves-light' id='trucking_"+i+"'><i class='fa fa-truck fa-2x truck-font' aria-hidden='true'></i>"
                      +"<button class='btn green choice-mid' type='submit' name='action'>"
                      +e.beginDate
                      +"</button>"
                      +"<button class='btn purple lighten-2 choice-mid' type='submit' name='action'>"
                      +e.endDate
                      +"</button>"
                      +"<button class='btn amber darken-4 choice-end' type='submit' name='action'>"
                      +e.endingCity
                      +"</button>"
                      +"<button class='btn blue darken-1 choice-last' type='submit' name='action'>Price:"
                      +e.pricePerCubicFootPerDuration
                      +"</button>"
                      +"<button class='btn light-green darken-2 choice-space' type='submit' name='action'>SA:"
                      +e.spaceAvailable
                      +"</button>"
                      +"</li></ul>" );
                  btnAry.push('trucking_'+i)
                });
                $( "#attach-to-me" ).append("<div id='last_table'></div>");

                console.log(btnAry);

                btnAry.map((e,i,a) => {
                  $( "#"+e ).click(function() {
                    // console.log("Your clicked "+ e);
                    self.state.purchaseVehicleSpace(data[i].owner, 1,1, {from:web3.eth.coinbase, value:data[i].pricePerCubicFootPerDuration},(err, res) => {
                      console.log(res);
                      toastr.success('Service Aquired!');
                      toastr.success('Transaction hash: '+ res);
                      // self.state.vehicles()

                      // create id
                      self.state.Agreement({requestor:web3.eth.coinbase},{fromBlock:0,toBlock:"latest"}).get((err,res) => {
                        console.log(res);

                        var container = $("#last_table"),
                        table = $('<table class="highlight"><thead><tr><th>Block Num</th><th>Transaction Hash</th><th>Paid</th><tbody></tbody></table>');

                          // debugger;
                          res.map((e) => {
                              var tr = $('<tr>');
                              ['blockNumber', 'transactionHash', 'money'].forEach(function(attr) {
                                if(attr == "money")
                                  tr.append('<td>' + e.args.amount.c + '</td>');
                                else
                                  tr.append('<td>' + e[attr] + '</td>');
                              });
                              table.append(tr);
                            // console.log(e.blockNumber);
                          })
                        container.append(table);
                      })
                    })
                  })
                })
                // debugger;

              })
            })
          },
          minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
        });
      })
    })
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
  grabData() {
    //
  }

  render() {
    return (
      <div className="requestor-page">
        <div className="z-depth-1 requestor-header"><img className="my-image" src={ header } /></div>

        <div className="card-content card light-blue lighten-2 white-text">
        <div className="row card-inside">
          <div className="col s12">
            <div className="row">
            <label htmlFor="autocomplete-input" className="left-nug white-label">Select a starting point</label>
              <div className="input-field col s12">
                <i className="material-icons prefix"></i>
                <input type="text" id="autocomplete-input" className="autocomplete" />
              </div>
            </div>
          </div>
        </div>
        </div>

        <div id="attach-to-me"></div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger;
  return { block: state.auth }
}
// {require('../../assets/splash_img.png')}
export default connect(mapStateToProps, actions)(Requestor);
