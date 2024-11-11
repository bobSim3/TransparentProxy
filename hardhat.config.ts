import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.24",
          settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          // viaIR: true,
        }, 
      },
    ],
  },
  networks:{
    bnb_testnet: {
			blockGasLimit: 3000000000000,
			url:`${process.env.BNB_URL}`,
			chainId: 97,
			accounts: [
        `${process.env.DEPLOYMENT_ADDRESS}`
      ],
			allowUnlimitedContractSize: false,
      ignition:{
        maxFeePerGasLimit: 10_000_000_000n,
        maxPriorityFeePerGas: 3_000_000_000n,
      }
    },
  },
  etherscan: {
    apiKey: {
			bscTestnet:`${process.env.ETHERSCAN_BSCTESTNET}`,
		}
  },
};

export default config;
