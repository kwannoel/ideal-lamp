pragma solidity ^0.4.0;

contract MyToken {
    address public creator;
    uint256 public totalSupply;
    mapping (address => uint256) public balances; // address of investor -> their acc balance

    // Constructor
    function MyToken() public {
        creator = msg.sender; // global var, address where external function call to contract came from
        totalSupply = 10000;
        balances[creator] = totalSupply;
    }

    function balanceOf(address owner) public constant returns(uint256){
        return balances[owner];
    }

    function sendTokens(address receiver, uint256 amount)
        public returns(bool){
        address owner = msg.sender;

        require(amount > 0);
        require(balances[owner] >= amount);

        balances[owner] -= amount;
        balances[receiver] += amount;
        return true;
    }
}
