import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: ", signer.address);

  const balance = await signer.getBalance();
  console.log("Account balance: ", (await ethers.utils.formatEther(balance.toString())));
}

main()
  .then(() => {
    process.exitCode = 0;
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
