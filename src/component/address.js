// replace if truffle is migrate reset
const address = {
  abi: [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "listOfVehicles",
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
        },
        {
          "name": "beginDate",
          "type": "uint256"
        },
        {
          "name": "endDate",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
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
        },
        {
          "name": "beginDate",
          "type": "uint256"
        },
        {
          "name": "endDate",
          "type": "uint256"
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
      "name": "purchaseVehicleSpace",
      "outputs": [],
      "payable": true,
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
      "constant": true,
      "inputs": [],
      "name": "vehicleDates",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
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
        },
        {
          "name": "beginDate",
          "type": "uint256"
        },
        {
          "name": "endDate",
          "type": "uint256"
        }
      ],
      "name": "addVehicle",
      "outputs": [],
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
      "constant": true,
      "inputs": [
        {
          "name": "city",
          "type": "bytes32"
        }
      ],
      "name": "vehicleDatesByCity",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "city",
          "type": "bytes32"
        }
      ],
      "name": "vehiclesByCity",
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
      "name": "vehicles",
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
        }
      ],
      "name": "addWarehouse",
      "outputs": [],
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
          "name": "requestor",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "seller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Agreement",
      "type": "event"
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
  ],
  truffleAddress : '0xc8fc2a2725149b493309d4a8a3bd9343318d0014'
}

export { address as default };
