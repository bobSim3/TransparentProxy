# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
# For all the upgradeable contract
npm install @openzeppelin/contracts-upgradeable dotenv

npx hardhat ignition deploy .\ignition\modules\deployment.ts --network bnb_testnet --verify --reset

npx hardhat ignition deploy .\ignition\modules\upgrade.ts --network bnb_testnet --verify --reset

```
