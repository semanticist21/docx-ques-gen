import {SelectChangeEvent} from '@mui/material/Select'
import {ReactNode, SVGProps} from 'react'

/**
 * @description option value type
 */
export type OptionValueType = string | number | readonly string[] | boolean

/**
 * @description select option value type
 */
export type SelectOptionValueType = Exclude<OptionValueType, boolean>

/**
 * @description option component props
 */
export type OptionBaseProps = {
  id: string
  title: string
  description: string
  label: string
  disabled?: boolean
  icon?: SVGProps<SVGSVGElement>
}

export type InputOptionsProps = OptionBaseProps & {
  value: OptionValueType
  onChange: (value: OptionValueType) => void
}

/**
 * @description selectOption component props
 */
export type SelectOptionProps = OptionBaseProps & {
  value: SelectOptionValueType
  onChange: (event: SelectChangeEvent, child?: ReactNode) => void
  options: OptionItem<SelectOptionValueType>[]
}

/**
 * @description select option item
 */
export type OptionItem<T> = {
  label: string
  value: T
}
