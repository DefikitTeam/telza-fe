import clientBlockchain from '@/api/instances/clientBlockchain'

interface GetTokenLargestAccountsParams {
  tokenAddress: string
}
interface GetTokenAccountsByOwnerParams {
  tokenAddress: string
  owner: string
}
const rpcApi = {
  async getTokenLargestAccounts(params: GetTokenLargestAccountsParams) {
    return clientBlockchain
      .post(``, {
        jsonrpc: '2.0',
        id: 1,
        method: 'getTokenLargestAccounts',
        params: [params.tokenAddress]
      })
      .then((res: any) => res.data)
  },
  async getTokenAccountsByOwner(params: GetTokenAccountsByOwnerParams) {
    return clientBlockchain
      .post(``, {
        jsonrpc: '2.0',
        id: 1,
        method: 'getTokenAccountsByOwner',
        params: [
          params.owner,
          {
            mint: params.tokenAddress
          },
          {
            encoding: 'jsonParsed'
          }
        ]
      })
      .then((res: any) => res.data)
  },
  async getBalance(address: string) {
    return clientBlockchain
      .post(``, {
        jsonrpc: '2.0',
        id: 1,
        method: 'getBalance',
        params: [address]
      })
      .then((res: any) => res.data)
  }
}

export default rpcApi
