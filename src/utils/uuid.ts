import {v4} from 'uuid'

/**
 * @description uuid generator
 * @returns {string} uuid
 */
export const getUuid = (): string => v4()
