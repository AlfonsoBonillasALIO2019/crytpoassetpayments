const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('PetShopMock', function () {
  let PetShopMock;
  let petShopMock;
  let owner;

  before(async function () {
    PetShopMock = await ethers.getContractFactory('PetShopMock');
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
  });

  it('Should deploy the contract', async function () {
    const name = 'JayCeeSnow';
    petShopMock = await PetShopMock.deploy(name);
    await petShopMock.deployed();
  });

  it('Should address be equal', async function () {
    const ownerAddress = await petShopMock.whoIsTheOwner();
    expect(owner.address).to.equal(ownerAddress);
  });

  it('Should name be equal', async function () {
    const newName = `J-${Math.ceil(Math.random() * 1000)}`;
    const setNewNameTx = await petShopMock.setNewName(newName);
    await setNewNameTx.wait(1);

    const currentName = await petShopMock.getName();
    expect(currentName).to.equal(newName);
  });
});
