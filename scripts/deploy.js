const { ethers, upgrades } = require('hardhat');

async function main () {
  const Token = await ethers.getContractFactory('SolarGreen');
  console.log('Розгортаю SolarGreen...');
  const token = await upgrades.deployProxy(Token);
  await token.deployed();
  console.log('SolarGreen розгорнуто за адресою:', token.address);
}

main();
