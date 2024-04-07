// require("@nomicfoundation/hardhat-toolbox");

require('@nomicfoundation/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config()
const{API_URL,KEY}= process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepoila",

networks:{
sepoila:{
  url:API_URL,
  accounts:[`e98afe1e50fdb3db768ec199457ad2298f3644a81b2f1a0313a215e2f75bb212`],
}
}
};
