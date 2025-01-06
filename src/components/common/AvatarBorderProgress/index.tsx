import { LIQUIDITY_DEX } from '@/constant/enum/feed'
import { getBaseImgUrl } from '@/utils/getBaseImgUrl'
import { getSolTxhScanUrl } from '@/utils/getSolScanUrl'
import { Box } from '@mui/material'

import { BaseImage } from '../BaseImage'

interface Props {
  imgUrl?: string
  percentage?: number
  borderColor?: string
  cerfitied?: string
  liquidityDex?: LIQUIDITY_DEX
}
export default function AvatarBorderProgress({
  imgUrl,
  percentage = 0,
  borderColor = '#A8A6FF',
  cerfitied,
  liquidityDex
}: Props) {
  const percent = Math.floor((Number(percentage) * 360) / 100) || 0
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="rounded-full bg-blackWhiteNeutral-1000"
      sx={{
        width: {
          xs: 51,
          md: 64
        },
        height: {
          xs: 51,
          md: 64
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: `conic-gradient( ${borderColor} 0deg, ${borderColor} ${percent}deg, transparent ${percent}deg, transparent 360deg )`,
          opacity: cerfitied ? 0 : 1
          // background: cerfitied
          //      ? `url(${getBaseImgUrl('/icons/cerfitied-border.svg')}) center center no-repeat`
          //      : `conic-gradient( ${borderColor} 0deg, ${borderColor} ${percent}deg, transparent ${percent}deg, transparent 360deg )`
          // background:
          //      'conic-gradient(#a6faff 13.88% 0deg, #a7a6ff 89.53% 216deg, transparent 216deg, transparent 360deg)'
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          width: {
            xs: 48,
            md: cerfitied ? 61 : 62
          },
          height: {
            xs: 48,
            md: cerfitied ? 61 : 62
          },
          // top: cerfitied ? '2px' : '1px',
          // left: cerfitied ? '2px' : '1px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          backgroundColor: 'blackWhiteNeutral.1000'
        }
      }}
    >
      {cerfitied && (
        <Box
          src={getBaseImgUrl(
            liquidityDex === LIQUIDITY_DEX.METEORA
              ? '/icons/certified-border-meteora.svg'
              : '/icons/cerfitied-border.svg'
          )}
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            position: 'absolute'
          }}
        />
      )}
      <Box
        component="img"
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        src={imgUrl}
        sx={{
          position: 'absolute',
          zIndex: 10,
          objectFit: 'cover',
          width: {
            xs: 44,
            md: 55
          },
          height: {
            xs: 44,
            md: 55
          }
        }}
      />
      {cerfitied && (
        <Box
          sx={{
            position: 'absolute',
            zIndex: 10,
            bottom: 0,
            right: 0
          }}
          onClick={() => {
            window.open(getSolTxhScanUrl(cerfitied), '_blank', 'noopener,noreferrer')
          }}
        >
          <BaseImage
            url={
              liquidityDex === LIQUIDITY_DEX.METEORA ? 'icons/meteora-certified.svg' : 'icons/raydium-cerfitied.svg'
            }
            width={24}
            height={24}
          />
        </Box>
      )}
    </Box>
  )
}
