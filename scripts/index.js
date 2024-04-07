const { ethers } = require("hardhat");

async function main () {
 const Token = await ethers.getContractFactory('SolarGreen');

 const token = await Token.attach('0xD3C1228716009D29b8930eaBd014D0272c210692')
 
 await token.mint('0xD3C1228716009D29b8930eaBd014D0272c210692', ethers.parseEther("2"));
 const balance = await token.balanceOf('0xD3C1228716009D29b8930eaBd014D0272c210692');
 console.log(balance.toString());
 console.log('SolarGreen deployed to:', token.target );
 console.log('Account:', token.runner. address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
