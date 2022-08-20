//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/access/Ownable.sol';
import 'hardhat/console.sol';

contract PetShopMock is Ownable {
    string private name;

    event CreatedContract(address owner);
    event AddedNewName(address owner, string name);

    constructor(string memory _name) {
        name = _name;
        emit CreatedContract(owner());
    }

    function whoIsTheOwner() public view returns (address _owner) {
        _owner = owner();
        return _owner;
    }

    function setNewName(string memory _name) public {
        name = _name;
        emit AddedNewName(owner(), name);
    }

    function getName() public view returns (string memory) {
        return name;
    }
}
