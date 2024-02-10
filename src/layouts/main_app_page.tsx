import {FC} from 'react'
import MainContent from './main_content'
import {MainSidebar} from './main_sidebar'
import {Box, SxProps} from '@mui/material'
import ContainerWithSplash from '@/components/molecules/container_with_splash'

const MainAppPage: FC = () => {
  const mainAppPageStyle: SxProps = {
    display: 'flex',
  }

  return (
    <ContainerWithSplash>
      <Box sx={mainAppPageStyle}>
        <MainSidebar />
        <MainContent />
      </Box>
    </ContainerWithSplash>
  )
}

export default MainAppPage
