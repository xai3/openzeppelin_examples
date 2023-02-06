import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

import dotenv from "dotenv";
dotenv.config();

require("tsconfig-paths/register");

const adminMnemonic = process.env.ADMIN_MNEMONIC;
if (!adminMnemonic) {
  console.error("ADMIN_MNEMONIC is required");
  process.exit(1);
}

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: {
        mnemonic: adminMnemonic,
      },
    }
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ["externalArtifacts/*.json"], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  }
};

export default config;
