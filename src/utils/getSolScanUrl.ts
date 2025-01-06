const scanUrl = process.env.NEXT_PUBLIC_SOLANA_EXPLORER_URL

export function getSolTxhScanUrl(txh: string) {
  const environment = process.env.NEXT_PUBLIC_ENV
  return `${scanUrl}/tx/${txh}?cluster=${environment === 'dev' ? 'devnet' : ''}`
}

export function getAddressScanUrl(address: string) {
  const environment = process.env.NEXT_PUBLIC_ENV
  return `${scanUrl}/address/${address}?cluster=${environment === 'dev' ? 'devnet' : ''}`
}
