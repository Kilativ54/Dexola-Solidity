# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
--- 0x5fbdb2315678afecb367f032d93f642f64180aa3 ---
0x5FC8d32690cc91D4c39d9d3abcBD16989F875707

const Token = await ethers.getContractFactory('SolarGreen');

 const token = await Token.attach('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')