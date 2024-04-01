const { ethers, upgrades } = require('hardhat');

async function main () {
  const Token = await ethers.getContractFactory('SolarGreen');
  console.log('Deploying SolarGreen...');
  const token = await upgrades.deployProxy(Token, [], { initializer: false });
  
  // await token.deployed();
  console.log('SolarGreen deployed to:', token.target);
}

main();