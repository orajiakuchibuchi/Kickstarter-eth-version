const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require('./build/CampaignFactory.json');
// Replace with your secret key/phrase. Note ensure to to leave variable empthy when pushing up to git
const SECRET_KEY = '';
// Replace with your network provider. Note ensure to to leave variable empthy when pushing up to git
const NETWORK_PROVIDER = '';
const provider = new HDWalletProvider( SECRET_KEY, NETWORK_PROVIDER );

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
    ).deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", gasPrice: '5000000000', from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
