# Smart Contracts Tutorial

Estimated Reading Time: 3-5 minutes

To run

```
npm i
npm start
```

## What is a Smart Contract?

A smart contract is essentially a computer program that is stored on a blockchain network and contains a set of rules for how it should behave under certain conditions. These rules are written in code and are executed automatically when the specified conditions are met.

For example, a smart contract might contain rules for how to distribute funds between multiple parties based on certain conditions being met, or how to transfer ownership of a digital asset from one party to another. The smart contract contains the logic that governs these actions, and once the conditions are met, the contract executes the specified actions automatically.

## What is a Blockchain?

Blockchain - A blockchain is a decentralized, distributed database that stores a continuously growing list of records called blocks. Each block contains a timestamp, a cryptographic hash of the previous block, and a batch of transaction data. When a new block is added to the chain, it is linked to the previous block in the chain, creating a "chain" of blocks that cannot be altered without invalidating the entire chain.

To add a new block to the chain, a consensus mechanism is used to validate the transactions contained in the block. This consensus mechanism ensures that all nodes in the network agree on the state of the blockchain, preventing double-spending and other fraudulent activity. Once the transactions are validated, the block is added to the chain and becomes a permanent part of the blockchain.

## What is a simple example of a way to use a Smart Contract?

Imagine that you want to buy a new video game from an online store. You make the purchase using your credit card, but you're not sure if you can trust the store to deliver the game or if they'll give you a refund if there's a problem.

Now, let's say that the online store uses a smart contract to handle your purchase. The smart contract is like a computer program that automatically executes certain actions based on the rules that have been set up in advance.

So, when you make the purchase, the smart contract automatically verifies that you have enough money in your account to pay for the game. It then holds onto the payment until the game has been delivered to you. Once the game has been delivered, the smart contract automatically releases the payment to the store. If the game is defective or not what you ordered, the smart contract could automatically initiate a refund process.

In this way, the smart contract acts as a middleman between you and the online store, ensuring that the transaction is secure and that you get what you paid for. The process is automated, so you don't have to worry about the store being dishonest or not following through on their promises.

Overall, smart contracts are like automated assistants that can help make transactions more secure and efficient, and they have the potential to transform the way we do business online.

### (Very) Basic Example

In this example, we have some class definitions to generate a Blockchain, a contract and a script.

- Block - constructed with data and a reference to the generated hash of the previous block. On construction, it generates a hash based on the current timestamp, block data and hash of the previous block.
- Blockchain - stores a collection of blocks with a method to add new blocks. It also has a method to verify the validity of the chain by recalculating the hash of each block and comparing it to the existing stored hash. As the hash generation is deterministic, this should output the same result if there has been no tampering. It also ensures that the reference to the hash of the previous block also matches.
- Contract - contains a validate function which ensures that the data contained within each block doesn't contain any restricted keywords. This could contain whatever functionality is required by the smart contract.

When you run `npm start`, the script will create a blockchain and add a few Blocks to it. In script.mjs, uncomment the line:

`// myBlockchain.addBlock(new Block("password: 123"));`

and run `npm start` again to see the error being thrown.

If we check the "validateBlock" function of contract.mjs, we can see that "password" is a restricted keyword that is not allowed to be contained within the data of any blocks of its chain. This is why the error is thrown - the block violates the contract which is validated when the blockchain attempts to add it to its chain.

From this basic example, we can extrapolate the mechanism by which smart contracts could be enforced and their broader application in various scenarios.
