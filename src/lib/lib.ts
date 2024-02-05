import { type Address } from "@lib/types";
import { CovalentClient } from "@covalenthq/client-sdk";

import { ethers } from "ethers";
import { COVALENTKEY } from "./config";



export const identify_validate_address = async (_address:string) => {
    let address = identify_address(_address);
    if (address.type == 'EVM') await validate_EVM_address(address.address);
}


const identify_address = (address:string) => {
    if (address[0] == 'T' && address.length == 41) return {address, type: 'TRON'}
    else if (address[0] == '0' && ethers.utils.isAddress(address)) return { address, type: 'EVM' }
    else return { address, type: 'EVM' }
}

export async function validate_EVM_address(address:string) {
    
    let verifiedAddress = ethers.utils.getAddress(address);
    
}


export async function validate_ETH_address(address:string) {

}


export async function getBalance(address:string) {
    if (address) console.log(address)
    const client = new CovalentClient('cqt_rQPF6cFt8PWjHHWQxQ99fwgP8wQd');
    const resp = await client.BalanceService.getTokenBalancesForWalletAddress("eth-mainnet","0x4Ae87a25b78fe0B7d6A9A37Aad75bc3f01C61094", {"quoteCurrency": "USD"});
    console.log(resp);
}