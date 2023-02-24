import CryptoJS from "crypto-js";

class Block {
  constructor(data, previousHash) {
    this.timestamp = Date.now();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return CryptoJS.SHA256(
      this.timestamp + this.data + this.previousHash
    ).toString();
  }
}

export default Block;
