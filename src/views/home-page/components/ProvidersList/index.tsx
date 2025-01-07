import { Box } from '@mui/material'
import style from './style.module.scss'

interface Provider {
  amount: string
  provider: string
  price: string
  time: string
  isBest?: boolean
}

export default function ProvidersList() {
  const providers: Provider[] = [
    { amount: '0.99992 ETH', provider: 'Symbiosis', price: '3457.40 $', time: '3 M', isBest: true },
    { amount: '0.99989 ETH', provider: 'Router', price: '3457.26 $', time: '3 M' },
    { amount: '0.99988 ETH', provider: 'XY', price: '3457.23 $', time: '6 M' },
    { amount: '0.99955 ETH', provider: 'Unknown', price: '3456.10 $', time: '' },
  ]

  return (
    <Box className={style.providersList}>
      <h1>Providers list</h1>
      {providers.map((provider, index) => (
        <Box key={index} className={style.providerItem}>
          <Box className={style.providerInfo}>
            <span>{provider.amount}</span>
            <span>{provider.provider}</span>
            {provider.isBest && <span className={style.bestTag}>BEST</span>}
          </Box>
          <Box className={style.priceInfo}>
            <span>~{provider.price}</span>
            {provider.time && <span>{provider.time}</span>}
          </Box>
        </Box>
      ))}
    </Box>
  )
}