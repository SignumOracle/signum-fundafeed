import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles'

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const theme = createTheme({
  palette: {
    primary: {
      main: '#fbc51b',
      secondary: 'rgba(251,197, 27, 0.2)',
    },
  },
})

export default function LinearIndeterminate() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '50%' }}>
        <CustomLinearProgress />
      </Box>
    </ThemeProvider>
  )
}
