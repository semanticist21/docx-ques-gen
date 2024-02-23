/**
 * @deprecated deprecated due to not using next.js anymore
 * @returns window validity
 */
export const handleIsTauriWindowLoaded = () => {
  return Boolean(typeof window !== 'undefined' && window !== undefined && (window as any).__TAURI_IPC__ !== undefined)
}
