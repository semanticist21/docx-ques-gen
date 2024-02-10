import {useTheme} from '@mui/material'
import { cn } from '@/utils/tailwind'
import {FC, useEffect, useState} from 'react'

export type RestoreWindowIconProps = {
  parentId?: string
  bgColor?: string
  hoverColor?: string
}

const RestoreWindowIcon: FC<RestoreWindowIconProps> = ({parentId, bgColor, hoverColor}) => {
  // props
  const theme = useTheme()
  const borderColor = theme.palette.primary.light

  const [isHover, setIsHover] = useState<boolean>(false)

  // handlers
  const onMouseEnter = () => setIsHover(true)
  const onMouseLeave = () => setIsHover(false)

  useEffect(() => {
    if (!parentId) return

    const parent = document.getElementById(parentId)
    if (!parent) return

    parent.addEventListener('mouseenter', onMouseEnter)
    parent.addEventListener('mouseleave', onMouseLeave)

    return () => {
      parent.removeEventListener('mouseenter', onMouseEnter)
      parent.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [parentId])

  return (
    <div className="relative flex justify-center items-center w-full h-full overflow-visible">
      <div
        className="absolute top-2.5 left-4 w-3.5 h-3.5 rounded-sm border-2"
        style={{
          borderColor,
        }}
      />
      <div
        className={cn('absolute top-3.5 left-3 w-3.5 h-3.5 rounded-sm border-2')}
        style={{
          borderColor,
          backgroundColor: isHover ? hoverColor : bgColor,
        }}
      />
    </div>
  )
}

export default RestoreWindowIcon
