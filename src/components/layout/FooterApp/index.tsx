import { Box, Typography } from '@mui/material'

export default function FooterApp() {
  return (
    <Box
      height={54}
      textAlign="center"
      sx={{
        display: { xs: 'none', sm: 'flex' },
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        justifyContent: { xs: 'end', lg: 'center' },
        paddingX: { xs: '20px', md: '40px' },
        alignItems: 'center',
        zIndex: 1,
        backdropFilter: 'blur(4px)'
      }}
    >
      <Typography
        variant="MontserratParagraphMediumRegular"
        color="blackWhiteNeutral.400"
        className="absolute top-1/2 -translate-y-1/2"
        sx={{ left: { xs: '20px', md: '40px' } }}
      >
        © telaz.net 2025
      </Typography>
      <Typography
        variant="MontserratParagraphMediumRegular"
        color="blackWhiteNeutral.400"
      >
        {`footer`}
      </Typography>
    </Box>
  )
}
