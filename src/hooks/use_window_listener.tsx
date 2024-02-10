import {useEffect} from 'react'

/**
 *
 * @param bindId html element id
 * @param eventType window event type
 * @param callback function bind to event
 */
const useWindowListener = <K extends keyof HTMLElementEventMap>(
  bindId: string,
  eventType: K,
  callback?: (this: HTMLElement | Document, ev: HTMLElementEventMap[K]) => any
) => {
  useEffect(() => {
    if (!callback) return

    if (bindId === 'document') {
      document.addEventListener(eventType, callback)
      return () => document.removeEventListener(eventType, callback)
    }

    const element = document?.getElementById(bindId)
    if (!element) return

    element.addEventListener(eventType, callback)
    return () => element.removeEventListener(eventType, callback)
  }, [bindId, callback, eventType])
}

export {useWindowListener}
