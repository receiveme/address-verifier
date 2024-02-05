import TronWeb from 'tronweb'

export const ETH_RPC = ''

export const TRON_API = process.env.TRON_API || '';
export const COVALENTKEY = process.env.COVALENTKEY || ""
export const tronWeb = new TronWeb({
    fullHost: 'https://nile.trongrid.io',
    headers: { "TRON-PRO-API-KEY": TRON_API }
})