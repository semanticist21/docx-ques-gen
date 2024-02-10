

import {Box, SxProps} from '@mui/material'
import PrintPage from '@/pages/print_page'
import SettingPage from '@/pages/setting_page'
import {FC} from 'react'
import useNavStore from '@/store/nav_store'

export const MainContent: FC = () => {
  // props
  const {getActiveKey} = useNavStore()

  // styles
  const mainContentBoxStyle: SxProps = {
    flexGrow: 1,
    p: 1,
  }

  // pages arr
  const pages = [<SettingPage key={1} />, <PrintPage key={2} />]
  const ActivePage = () => pages[getActiveKey()]

  return (
    <Box className="select-text" id="main-content" component="main" sx={mainContentBoxStyle}>
      <ActivePage />
    </Box>
  )
}

export default MainContent
