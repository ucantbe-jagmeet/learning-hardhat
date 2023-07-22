// SPDX-License-Identifier:MIT 
pragma solidity >=0.5.0 <0.9.0;

contract TokenTest{
        string public name = "HardHat Token";
        string public symbol = "HHT";
        uint public tokenSupply = 10000;
        
        address public owner;

        mapping( address => uint) balances;

        constructor(){
            balances[msg.sender] = tokenSupply;
            owner= msg.sender;
        }

        function transfer( address to, uint amount)  external {
            require( balances[msg.sender]>=amount, 'Not enough tokens');
            balances[msg.sender] -= amount;
            balances[to]+= amount;
        }

        function balanceof( address account)  external view returns(uint){
            return balances[account];
        }

}