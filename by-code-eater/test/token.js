const { expect } = require("chai");

describe("TokenTest contract", () => {
  it("Deployment should assign the total supply of tokens to the owner", async () => {
    const [owner] = await ethers.getSigners();
    console.log("Signers object: ", owner);

    const Token = await ethers.getContractFactory("TokenTest"); // instance of contract

    const hardhatToken = await Token.deploy(); // deploy contract

    const ownerBalance = await hardhatToken.balanceOf(owner.address); // ownerBalance = 10000
    console.log("Owner Address:", owner.address);

    const tokenSupply = 10000; // Hard-coded total supply for this example, replace with actual value if needed

    expect(ownerBalance.toNumber()).to.equal(tokenSupply); // token supply = 10000
  });
});
