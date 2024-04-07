const { ethers } = require("hardhat");

async function main () {
 const Token = await ethers.getContractFactory('SolarGreen');

 const token = await Token.attach('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512')
 
 await token.mint('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', ethers.parseEther("7000"));
 const balance = await token.balanceOf('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');
 console.log(balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
