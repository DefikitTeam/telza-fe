import React, { useMemo } from 'react'

import ModalApp from '@/components/common/ModalApp'
import { Box, Tooltip, Typography } from '@mui/material'

const BubbleMap = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  return (
    <ModalApp
      isOpen={isOpen}
      close={close}
      style={{
        padding: '40px 0',
        width: 676,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '2px solid #262626',
        boxShadow: 'none'
      }}
    >
      <Box>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#FDB304', fontWeight: 'bold', marginBottom: '20px' }}>
          Bubble Map Visualization
        </Typography>
        <Box sx={{
          width: '100%',
          height: 'calc(100vh - 200px)',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <iframe
            src="https://app.bubblemaps.io/sol/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            title="Token Bubble Map"
          />
        </Box>
        <Typography variant="body2" sx={{ textAlign: 'center', color: '#666', marginTop: '15px' }}>
          Explore token distribution and holder relationships
        </Typography>
      </Box>
    </ModalApp>
  )
}

export default BubbleMap
