// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";

contract SecondSwap_MarketplaceProxyAdmin is ProxyAdmin {
    constructor(address owner) ProxyAdmin(owner) {
    }
}