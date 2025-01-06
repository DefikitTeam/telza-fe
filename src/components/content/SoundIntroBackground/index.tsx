import { useEffect, useRef, useState } from 'react'

import { Icon } from '@/components/common/Icon'
import { Box, Typography } from '@mui/material'

export default function SoundIntroBackground() {
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<any>(null)

  function togglePlay(status?: boolean) {
    if (!playerRef.current) return
    if (status) {
      playerRef.current?.play()
    } else {
      playerRef.current?.pause()
    }
  }

  useEffect(() => {
    if (playerRef.current) {
      togglePlay(isPlaying)
    }
  }, [isPlaying])

  return (
    <>
      <audio
        ref={playerRef}
        id="player"
        loop
      >
        <source
          src="/media/retro-sound.wav"
          type="audio/wav"
        />
      </audio>
      <Box
        onClick={() => setIsPlaying(!isPlaying)}
        display="flex"
        alignItems="center"
        className="cursor-pointer select-none"
        sx={{
          display: {
            xs: 'none',
            md: 'flex'
          }
        }}
      >
        <Typography variant="MsSanHeadingHeading5Bold">[</Typography>
        <Typography
          variant="MsSanHeadingHeading5Bold"
          component="div"
          mr={1}
        >
          Music
        </Typography>
        <Icon
          url={isPlaying ? 'icons/volume.svg' : 'icons/volume-mute.svg'}
          size={21}
          height={21}
          color="white"
        />
        <Typography variant="MsSanHeadingHeading5Bold">]</Typography>
      </Box>
    </>
  )
}
