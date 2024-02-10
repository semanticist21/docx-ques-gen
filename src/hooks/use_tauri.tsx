

import {listen} from '@tauri-apps/api/event'
import {WebviewWindow} from '@tauri-apps/api/window'
import {useEffect, useState} from 'react'
import {Keys, EventTypes} from '@/types/tauri'

/**
 *
 * @param type tauri event type
 * @param callback function to bind for the event
 */
export const useTauriEvent = (type: Keys<typeof EventTypes>, callback: () => void) => {
  useEffect(() => {
    const unsubscribe = listen(`tauri://${type}`, callback)

    return () => {
      unsubscribe.then(unsubscribe => unsubscribe())
    }
  }, [callback, type])
}

/**
 *
 * @returns app window object
 */
export const useTauriWindow = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow>()

  const setupWindowAfterLoad = () => {
    import('@tauri-apps/api/window').then(imported => setAppWindow(imported.appWindow))
  }

  useEffect(() => setupWindowAfterLoad(), [])
  return appWindow
}

/**
 * @description get tauri version, located in Cargo.toml
 * @returns tauri version
 */
export const useTauriVersion = () => {
  const [version, setVersion] = useState<string>('')

  useEffect(() => {
    import('@tauri-apps/api').then(imported => imported.app.getVersion().then(v => setVersion(v)))
  }, [])

  return version
}
