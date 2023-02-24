import Blockchain from "./Blockchain.mjs";
import Block from "./Block.mjs";

let myBlockchain = new Blockchain();
myBlockchain.addBlock(new Block("Data for block 1"));
myBlockchain.addBlock(new Block("Data for block 2"));

// Uncomment to see the error in action
// myBlockchain.addBlock(new Block("password: 123"));

console.log("Is blockchain valid? " + myBlockchain.isChainValid());
