const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();
async function main (){
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider);
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi","utf-8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf-8");
    const contractFactory = new ethers.ContractFactory(abi,binary,wallet);
    console.log("DEPLOYING CONTRACT...");
    const contract = await contractFactory.deploy(); // WAIT FOR CONTRACT TO DEPLOY
   // await contract.deploymentTransaction.wait(1);
    // console.log('Contract Address: ${contract.address}');
    console.log('contract address: ',contract.address);
    
    contract.store(5);
    const currentNums = await contract.getNum();
    console.log("the current value of num is: ",currentNums);
    
}
main()
    .then(()=> process.exit(0)) 
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    });