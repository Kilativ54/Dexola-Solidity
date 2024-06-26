const { ethers, upgrades } = require('hardhat');

async function main () {
  const Token = await ethers.getContractFactory('SolarGreen');
  console.log('Deploying SolarGreen...');
  const token = await upgrades.deployProxy(Token, ['0x4d44a792c612727a80077E511D5936f5eFFAe83e', '0x4d44a792c612727a80077E511D5936f5eFFAe83e', '0x4d44a792c612727a80077E511D5936f5eFFAe83e'], { initializer: 'initialize' });
  
  // await token.runner.deployed();
  console.log('SolarGreen deployed to:', token.target );
  console.log('Account:', token.runner. address);
  }

main();