import { Box } from '@mui/material'

import style from './style.module.scss'

export default function Spinner({ width, height }: { width?: number | string; height?: number | string }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        className={style.spinner}
        width={width || 20}
        height={height || 20}
      />
    </Box>
  )
}
