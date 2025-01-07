import { Box, Button, TextField, IconButton, Typography } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import SettingsIcon from '@mui/icons-material/Settings'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import style from './style.module.scss'

export default function SwapCard() {
  return (
    <Box className={style.swapCard}>
      <Box className={style.header}>
        <h1>Swap</h1>
        <Box className={style.headerIcons}>
          <Button>
            <RefreshIcon />
          </Button>
          <Button>
            <SettingsIcon />
          </Button>
        </Box>
      </Box>

      <Box className={style.tokenInputs}>
        <Box className={style.inputGroup}>
          <Button variant="contained" className={style.tokenSelect}>
            Select Token <ArrowDropDownIcon />
          </Button>
          <TextField
            placeholder="Enter an Amount"
            fullWidth
            className={style.input}
          />
        </Box>

        <Box className={style.switchButton}>
          <Button>
            <SwapVertIcon />
          </Button>
        </Box>

        <Box className={style.inputGroup}>
          <Button variant="contained" className={style.tokenSelect}>
            Select Token <ArrowDropDownIcon />
          </Button>
          <Typography className={style.input}>0</Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        fullWidth
        className={style.selectTokensButton}
      >
        Select tokens
      </Button>
    </Box>
  )
}