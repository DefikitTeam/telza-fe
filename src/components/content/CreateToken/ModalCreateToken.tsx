import React, { useCallback, useEffect, useState } from 'react'

import BaseButton from '@/components/BaseButton'
import { BaseImage } from '@/components/common/BaseImage'
import BaseFormControl from '@/components/common/Form/BaseFormControl'
import ModalApp from '@/components/common/ModalApp'
import { useAppSelector } from '@/lib/hooks'
import { Box, Typography } from '@mui/material'

interface Props {
  loading?: boolean
  isOpen: boolean
  close: () => void
  symbol: string
  create: (sol: number) => void
}

export default function ModalCreateToken({ isOpen, close, symbol, create, loading }: Props) {
  const [sol, setSol] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [disable, setDisable] = useState<boolean>(false)
  const { balanceMax } = useAppSelector((state) => state.appStore)

  const handleChangeSol = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value === '') {
      setSol(null)
      return
    }
    if (/^(?!0\d)\d*\.?\d*$/.test(value)) {
      const numericValue = parseFloat(value)
      setSol(numericValue)
    }
  }

  useEffect(() => {
    if (sol && sol > balanceMax) {
      setError(`Amount is greater than balance ${balanceMax} SOL`)
      setDisable(true)
    } else {
      setError(null)
      setDisable(false)
    }
  }, [sol, balanceMax])

  const handleCreate = useCallback(async () => {
    if (disable) return
    await create(sol || 0)
    setSol(null)
  }, [disable, create, sol])

  return (
    <ModalApp
      isOpen={isOpen}
      close={close}
      width={615}
    >
      <Box textAlign="center">
        <Typography
          component="div"
          variant="MsSanHeadingHeading6Bold"
        >
          Choose how many {symbol} you want to buy
        </Typography>
        <Typography
          component="div"
          variant="MsSanParagraphMediumNormal"
        >
          [optional]
        </Typography>

        <Typography
          component="div"
          my={6}
          variant="MsSanParagraphMediumNormal"
        >
          buying a small amount of coins helps protect your coin from snipers
        </Typography>

        <BaseFormControl
          sx={{
            my: 2
          }}
          minHeight={36}
          inputProps={{
            placeholder: '0.0 (Optional)',
            value: sol,
            type: 'number',
            onChange: handleChangeSol
          }}
          suffix={
            <Box
              display="flex"
              alignItems="center"
              mt={1}
              gap={2}
              px={2}
              width={76}
            >
              <Typography
                variant="MontserratParagraphMediumMedium"
                color="blackWhiteNeutral.0"
              >
                SOL
              </Typography>
              <BaseImage
                url="coins/sol-shadow.png"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Box>
          }
        />
        {error && (
          <Typography
            variant="MsSanParagraphMediumNormal"
            color="red.500"
          >
            {error}
          </Typography>
        )}

        <Box
          display="flex"
          justifyContent="center"
          mt={6}
        >
          <BaseButton
            loading={loading}
            width={200}
            height={48}
            color="primary"
            onClick={handleCreate}
            disabled={disable}
          >
            Create Coin
          </BaseButton>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          mt={6}
        >
          <Typography
            color="purple.300"
            variant="MsSanParagraphMediumNormal"
          >
            Create Coin Net Fee:
          </Typography>
          <Typography
            color="purple.300"
            variant="MsSanParagraphLargeBold"
          >
            ~0.02 SOL
          </Typography>
        </Box>
      </Box>
    </ModalApp>
  )
}
