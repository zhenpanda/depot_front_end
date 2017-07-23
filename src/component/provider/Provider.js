import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
// import * as Web3 from 'web3';

var Web3 = require('web3');
var web3 = new Web3('ws://localhost:8545');

var abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "listOfWarehouses",
    "outputs": [
      {
        "name": "spaceAvailable",
        "type": "uint256"
      },
      {
        "name": "totalSpace",
        "type": "uint256"
      },
      {
        "name": "pricePerCubicFootPerHour",
        "type": "uint256"
      },
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "beginningCity",
        "type": "bytes32"
      },
      {
        "name": "endingCity",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "warehouses",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      },
      {
        "name": "",
        "type": "uint256[]"
      },
      {
        "name": "",
        "type": "uint256[]"
      },
      {
        "name": "",
        "type": "address[]"
      },
      {
        "name": "",
        "type": "bytes32[]"
      },
      {
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_cubicFeet",
        "type": "uint256"
      },
      {
        "name": "pricePerCubicFootPerHour",
        "type": "uint256"
      },
      {
        "name": "startingPosition",
        "type": "bytes32"
      },
      {
        "name": "endingPosition",
        "type": "bytes32"
      }
    ],
    "name": "addWarehouse",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "cubicFeet",
        "type": "uint256"
      },
      {
        "name": "amountOfHours",
        "type": "uint256"
      }
    ],
    "name": "purchaseWarehouseSpace",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address[]"
      },
      {
        "name": "cubicFeet",
        "type": "uint256[]"
      },
      {
        "name": "amountOfHours",
        "type": "uint256[]"
      }
    ],
    "name": "purchaseWarehouseSpace",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "remaining",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  },
  {
    "payable": true,
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  }
];
var truffleAddress = '0x609755f2afd16979c4793fd0caa861976ab5fff2';

class Provider extends Component {
  // INIT State
  constructor(props) {
    super(props);
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
    let test = web3.eth.contract(abi).at(truffleAddress);
    this.state = test;
  }
  componentWillMount() {
    console.log("loading component....");
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

  render() {
    return (
      <div className="home">
        <div>
          <p>This is the provider page</p>
          <a onClick={() => {this.getData()}}>testCLick</a>
          <br />
          <a onClick={() => {this.postData()}}>postCLick</a>
        </div>
      </div>
    );
  }
}
// <img src={ splash } />

function mapStateToProps(state) {
  // debugger;
  return { board: state.auth }
}
// {require('../../assets/splash_img.png')}
export default connect(mapStateToProps, actions)(Provider);
// <a className="waves-effect waves-light btn" onClick={() => this.getData()}>HIT ME</a>
