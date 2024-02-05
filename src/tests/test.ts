import { BalancesResponse, CovalentClient } from "@covalenthq/client-sdk";

let myAddress = '0x4Ae87a25b78fe0B7d6A9A37Aad75bc3f01C61094'
let network = 'eth-mainnet'
// async function test1(address:string) {
//     await identify_validate_address(address)
// } test1(myAddress)

// MAKE SURE UR USING NODE VERSION 18 AT LEAST
const getTokenBalancesForWalletAddress = async (address:string, network:string) => {
    const client = new CovalentClient("cqt_rQrB8h4vBCHrJbBPYj6ddrBmM6wC");
    //@ts-ignore
    const resp = await client.BalanceService.getTokenBalancesForWalletAddress(network, address, {"quoteCurrency": "USD"});
    console.log(resp.data);
    return resp.data
}

async function getBalance(address:string) {
    const data = await getTokenBalancesForWalletAddress(myAddress, network)
    const balance = await _getBalance(data)

} getBalance(myAddress)


async function _getBalance(data: BalancesResponse) {
    let bal = {
        
    }

}