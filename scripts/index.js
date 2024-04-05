const { ethers } = require("hardhat");

async function main () {
 const Token = await ethers.getContractFactory('SolarGreen');

 const token = await Token.attach('0x9A676e781A523b5d0C0e43731313A708CB607508')
 
 await token.mint('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', ethers.parseEther("3000"));
 const balance = await token.balanceOf('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');
 console.log(balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
