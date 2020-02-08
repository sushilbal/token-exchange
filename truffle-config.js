const path = require("path");
const HDWAlletProvicer = require ("@truffle/hdwallet-provider");
require('dotenv').config();
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan :{
      provider : ()=> new HDWAlletProvicer(process.env.MNEMONIC,"https://kovan.infura.io/v3/"+ process.env.KOVAN_IFURA_KEY),
      network_id: "42", // Match any network id
      gasPrice: 25000000000,
      gas: 5000000,
    }
  }
};
