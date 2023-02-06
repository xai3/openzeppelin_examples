//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Sample is ERC20 {
    uint constant initialSupply = 100 * (10 ** 10);

    constructor() ERC20("ERC20Sample", "XAI") {
        _mint(msg.sender, initialSupply);
    }
}