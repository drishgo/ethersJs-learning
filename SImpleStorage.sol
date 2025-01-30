//SPDX-License-Identifier : MIT
pragma solidity 0.8.28; //solidity version must

contract SimpleStorage{
    //boolean, uint, int ,address, bytes ---> prim datatypes in Solidity

    //uint is unsigned integer and can also be specified with the number of bits that can 
    // be allocated to the variable like so :-

    uint public num = 12 ;

    //to wrap your head around this, the largest number that can be represented in 8 bits is 255
    // which means that setting nums as anything above 255 and below 0 will give an error.
    // Default is uint256.
    mapping(uint256=>people) idToPeople;
    function store(uint256 _nums) public{
        num = _nums;
    }
    people[] public group;
    
    struct people{
        uint256 id;
        string username;

    }
    function getPersonDetails(uint256 _id) public view returns( people memory){
        return idToPeople[_id];
    }
    function getNum() public view returns(uint256){
        return num;
    }
    

}
//0xd9145CCE52D386f254917e481eB44e9943F39138