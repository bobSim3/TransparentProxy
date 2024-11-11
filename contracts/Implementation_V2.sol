// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Implementation_v2 is Initializable{
    
    uint256 public number;
    address public owner;
    address public dev;

    // function initialize (address _owner) public initializer {
    //     owner = _owner;
    // }

    // reinitializer is use because we are changing the contract logic
    function initialize (address _owner,address _dev) public reinitializer(2) {
        owner = _owner;
        dev = _dev; // Added dev
    }

    function setNumber (uint256 _number) public {
        number = _number;
    }

    function getVersion() public pure returns (string memory) {
        return "2.0.0"; // changes made here
    }
}
