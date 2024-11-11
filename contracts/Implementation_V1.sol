// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Implementation_v1 is Initializable {
    
    uint256 public number;
    address public owner;
    
    // contructor can't be use because proxy contract do not call the constructor of the implementation contract 
    // constructor (address _owner) {
    //     owner = _owner;
    // }

    function initialize (address _owner) public initializer {
        owner = _owner;
    }
    
    function setNumber (uint256 _number) public {
        number = _number;
    }

    function getVersion() public pure returns (string memory) {
        return "1.0.0";
    }
}
