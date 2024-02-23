/// <reference types="vite-plugin-svgr/client" />
import './App.css'
import ThemeCustomProvider from './layouts/theme_custom_provider'
import MainWrapper from './layouts/main_wrapper'
import MainTitle from './layouts/main_titlebar'
import MainAppPage from './layouts/main_app_page'
import './globals.scss'

import * as buffer from 'buffer/index'

function App() {
  return (
    <ThemeCustomProvider>
      <MainWrapper>
        <MainTitle />
        <MainAppPage />
      </MainWrapper>
    </ThemeCustomProvider>
  )
}

export default App
