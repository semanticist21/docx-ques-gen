import clsx, {ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

/**
 *
 * @param classes Tailwind CSS classnames
 * @description Tailwind CSS classnames generator
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes))
