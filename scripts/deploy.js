const { ethers, upgrades } = require('hardhat');

async function main () {
  const Token = await ethers.getContractFactory('SolarGreen');
  console.log('Deploying SolarGreen...');
  const token = await upgrades.deployProxy(Token, ['0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'], { initializer: 'initialize' });
  
  // await token.runner.deployed();
  console.log('SolarGreen deployed to:', token.target );
  console.log('Account:', token.runner. address);
}

main();