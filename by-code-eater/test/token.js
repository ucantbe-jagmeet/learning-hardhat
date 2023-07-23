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

  it("Should transfer tokens between accounts", async () => {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("TokenTest"); // instance of contract

    const hardhatToken = await Token.deploy(); // deploy contract

    //transfer 10 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 10);
    expect((await hardhatToken.balanceOf(addr1.address)).toNumber()).to.equal(
      10
    );

    //transfer 10 tokens from add1 to addr2
    await hardhatToken.connect(addr1).transfer(addr1.address, 10);
    expect((await hardhatToken.balanceOf(addr2.address)).toNumber()).to.equal(
      10
    );
  });
});
