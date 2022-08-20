const fs = require('fs');
const { networkConfig } = require('../helper-hardhat-config');

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  log('----------------------------------');
  const name = 'JayCeeSnow';
  const args = [name];
  const PetShopMock = await deploy('PetShopMock', { from: deployer, log: true, args: args });
  await createJSON({ address: PetShopMock.address });
  log(`you have deployed and NFT contract to ${PetShopMock.address}`);

  const accounts = await hre.ethers.getSigners();
  const signer = accounts[0];
  log('signerAddress:', signer.address);

  const PetShopMockContract = await ethers.getContractFactory('PetShopMock');
  const petShopMock = new ethers.Contract(PetShopMock.address, PetShopMockContract.interface, signer);

  petShopMock.on('CreatedContract', async (owner) => {
    log('EVENT-CreatedContract-:', owner);
  });

  petShopMock.on('AddedNewName', async (owner, name) => {
    log('EVENT-AddedNewName:', owner, name);
  });

  const ownerAddress = await petShopMock.whoIsTheOwner();
  log('ownerAddress', ownerAddress);

  const newName = `J-${Math.ceil(Math.random() * 1000)}`;
  log('newName:', newName);
  const setNewNameTx = await petShopMock.setNewName(newName);
  await setNewNameTx.wait(1);

  const networkName = networkConfig[chainId].name;
  log(`Verifying with:\nnpx hardhat verify ${PetShopMock.address} "JayCeeSnow" --network ${networkName}`);

  const currentName = await petShopMock.getName();
  log('currentName:', currentName);

  await delay(async () => log('Waiting Done...........'), 5);
};

const delay = async (cb, seconds = 1) =>
  new Promise((resolve) => {
    console.log('Waiting');
    setTimeout(() => {
      resolve(cb());
    }, seconds * 1000);
  });

const createJSON = async (data) => {
  const text = JSON.stringify(data);
  await fs.writeFileSync('itemMetadata.json', text);
};

module.exports.tags = ['00_PetShopMock'];
