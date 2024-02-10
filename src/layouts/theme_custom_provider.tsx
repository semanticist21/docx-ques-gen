

import {ThemeProvider, createTheme} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {FC, PropsWithChildren} from 'react'

const ThemeCustomProvider: FC<PropsWithChildren> = ({children}) => {
  const darkTheme = createTheme({
    typography: {
      fontFamily: ['HIMelody-Regular, Comfortaa'].join(','),
    },
    drawerWidth: '53px',
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeCustomProvider
