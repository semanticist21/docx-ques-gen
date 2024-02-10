import {FC} from 'react'
import {CircularProgress} from '@mui/material'
import { cn } from '@/utils/tailwind'

export type SplashScreenProps = {
  isShow: boolean
}

export const SplashScreen: FC<SplashScreenProps> = ({isShow}) => {
  return (
    <div className={cn('absolute flex flex-col w-full h-full items-center justify-center', isShow ? '' : 'hidden')}>
      <CircularProgress />
    </div>
  )
}
