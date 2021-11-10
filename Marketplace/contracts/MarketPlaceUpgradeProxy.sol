pragma solidity ^0.6.8;

import "@openzeppelin/contracts/proxy/TransparentUpgradeableProxy.sol";


contract MarketPlaceUpgradeProxy is TransparentUpgradeableProxy {

    constructor(address admin, address logic, bytes memory data) TransparentUpgradeableProxy(logic, admin, data) public {

    }

}
