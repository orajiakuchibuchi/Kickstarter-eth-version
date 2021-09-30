import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const CONTRACT_ADDRESS = '0x89C6089999A1eF99F6b50B8Ede2B807A70Add1E1';
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), CONTRACT_ADDRESS
);

export default instance;