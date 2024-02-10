import {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {CloseTwoTone, CropSquareTwoTone, HorizontalRuleTwoTone} from '@mui/icons-material'
import {Box, Button} from '@mui/material'
import {SxProps, useTheme} from '@mui/material/styles'
import Exam from '@/assets/svgs/exam.svg?react'
import RestoreWindowIcon from '@/components/atoms/restore_window_icon'
import {CONST} from '@/consts/consts'
import {useTauriEvent, useTauriVersion, useTauriWindow} from '@/hooks/use_tauri'

// layout styles defined in 'main_title.scss'
const MainTitle = () => {
  // state
  const theme = useTheme()
  const [dynamicBg, setDynamicBg] = useState<string>(theme.palette.grey[200])
  const version = useTauriVersion()

  const boxRef = useRef<HTMLDivElement>(null)
  const appWindow = useTauriWindow()

  const [isWindowMaximized, setIsWindowMaximized] = useState<boolean>(false)

  // dynamic focus change
  const addAppBlurListener = () => setDynamicBg(theme.palette.grey[400])
  const addAppFocusDownListener = () => setDynamicBg(theme.palette.grey[200])

  useTauriEvent('blur', addAppBlurListener)
  useTauriEvent('focus', addAppFocusDownListener)

  // styles
  const titleBarStyle: SxProps = {
    position: 'fixed',
    backgroundColor: dynamicBg,
    zIndex: theme.zIndex.drawer + 1,
  }

  const buttonStyle: SxProps = {
    color: theme.palette.primary.light,
    height: '100%',
    minWidth: '2.5rem',
    padding: 0,
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  }

  const genBtn = (icon: ReactNode, callback: () => void, id?: string) => {
    const ButtonComponent = () => (
      <Button id={id} size="small" variant="text" sx={buttonStyle} onClick={callback}>
        {icon}
      </Button>
    )

    ButtonComponent.displayName = 'titleBarBtn'
    return ButtonComponent
  }

  // window control
  const minimize = () => appWindow?.minimize()
  const maximize = () => appWindow?.maximize()
  const unMaximize = () => appWindow?.unmaximize()
  const close = () => appWindow?.close()

  const Minimize = genBtn(<HorizontalRuleTwoTone />, minimize)
  const Maximize = genBtn(<CropSquareTwoTone />, maximize)
  const UnMaximize = genBtn(
    <RestoreWindowIcon parentId="unmaximizeBtn" bgColor={dynamicBg} hoverColor={theme.palette.grey[300]} />,
    unMaximize,
    'unmaximizeBtn'
  )
  const Close = genBtn(<CloseTwoTone />, close)

  // use effects
  // bind resize event
  const bindResizeEvent = useCallback(
    () => () => {
      appWindow?.isMaximized().then((flag: boolean) => {
        flag ? setIsWindowMaximized(true) : setIsWindowMaximized(false)
      })
    },
    [appWindow]
  )

  // bind resize event in the first time
  useEffect(() => {
    if (appWindow) appWindow.onResized(bindResizeEvent)
  }, [appWindow, bindResizeEvent])

  return (
    <Box id="titlebar" className="flex" data-tauri-drag-region ref={boxRef} sx={titleBarStyle} component="header">
      <div className="flex items-center cursor-default">
        <div className="w-4" />
        <Exam />
        <div className="w-2" />
        <p className="flex">
          <span className="font-semibold text-sm text-black">{CONST.APP_NAME}</span>
          <span className="w-1" />
          <i className="text-xs self-end text-gray-400">{version}</i>
        </p>
        <div className="w-2" />
      </div>
      <div className="ml-auto">
        <Minimize />
        {isWindowMaximized ? <UnMaximize /> : <Maximize />}
        <Close />
      </div>
    </Box>
  )
}

export default MainTitle
