import { ethers } from "hardhat";

import { ERC20Sample, ERC20Sample__factory } from "@/types";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: ", signer.address);

  const factory = new ERC20Sample__factory(signer);
  const token: ERC20Sample = await factory.deploy();

  console.log("Token address: ", token.address);
}

main()
  .then(() => {
    process.exitCode = 0;
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
