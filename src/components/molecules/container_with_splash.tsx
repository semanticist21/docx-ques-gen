import {SplashScreen} from '@/components/atoms/splash_screen'
import {useTitlebarHeight} from '@/hooks/use_size'
import {FC, PropsWithChildren, useEffect, useState} from 'react'
import {cn} from '@/utils/tailwind'

const ContainerWithSplash: FC<PropsWithChildren> = ({children}) => {
  const height = useTitlebarHeight()
  const [showSplash, setShowChild] = useState<boolean>(true)

  useEffect(() => {
    setShowChild(false)
  }, [])

  return (
    <div className="relative h-full" style={{paddingTop: height}}>
      <SplashScreen isShow={showSplash} />
      <div className={cn(showSplash ? 'hidden' : '')}> {children}</div>
    </div>
  )
}

export default ContainerWithSplash
