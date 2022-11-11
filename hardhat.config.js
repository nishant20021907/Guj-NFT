require("@nomiclabs/hardhat-waffle")
// require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString();
// const projectId = "de0a03502fd24a1caace212d20fee18c"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/de0a03502fd24a1caace212d20fee18c',
      accounts: [privateKey]
    },
    mainnet: {
      url: 'https://polygon-mainnet.infura.io/v3/de0a03502fd24a1caace212d20fee18c',
      accounts: [privateKey]
    },
  },
  solidity: "0.8.17",
};
