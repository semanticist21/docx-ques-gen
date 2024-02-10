import {Keys} from './tauri'

/**
 * @description document type base
 */
export const DocumnetTypes = ['competition', 'normal', 'children'] as const

/**
 * @description document type
 */
export type DocumentType = Keys<typeof DocumnetTypes>

/**
 *
 * @param value
 * @returns document type boolean
 */
export const isDocumentType = (value: string): boolean => {
  return Object.keys(DocumnetTypes).includes(value)
}
