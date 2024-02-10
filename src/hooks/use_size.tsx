

import {useEffect, useState} from 'react'
import {useTauriWindow} from './use_tauri'

/**
 *
 * @returns titlebar height in pixels
 */
export const useTitlebarHeight = () => {
  const [height, setHeight] = useState<number>(0)
  const [titleBarElement, setTitleBarElement] = useState<HTMLElement | null>()

  const appWindow = useTauriWindow()

  // get titlebar element
  useEffect(() => {
    if (!appWindow) return

    const titleBarElement = document.getElementById('titlebar')
    setTitleBarElement(titleBarElement)
  }, [appWindow])

  // get titlebar height
  useEffect(() => {
    if (!appWindow) return

    const titleBarHeight = titleBarElement?.clientHeight
    setHeight(titleBarHeight || 0)
  }, [appWindow, titleBarElement])

  return height
}
