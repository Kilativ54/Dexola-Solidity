const { ethers, upgrades } = require('hardhat');

async function main () {
  const Token = await ethers.getContractFactory('SolarGreen');
  console.log('Deploying SolarGreen...');
  const token = await upgrades.deployProxy(Token, ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'], { initializer: 'initialize' });
  
  // await token.runner.deployed();
  console.log('SolarGreen deployed to:', token.target );
  console.log('Account:', token.runner. address);
}

main();