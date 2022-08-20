require('@nomicfoundation/hardhat-toolbox');
require('hardhat-deploy');
require('hardhat-gas-reporter');
require('dotenv').config();

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
      },
    ],
  },
  defaultNetwork: 'hardhat',
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: 'USD',
    coinmarketcap: process.env.COIN_MARKET_CAP_API_KEY,
  },
};
