import { Props as IconProps } from 'components/Icon/Icon.types'
import React from 'react'

export type DefaultProps = {
  text: React.ReactNode
  icon: IconProps['name'] | ''
  type: 'square' | 'rectangle' | 'circle'
  isActive: boolean
  isDisabled: boolean
  className: string
  IconComponent?: React.ElementType
}

export type Props = DefaultProps & {
  onClick?: (event: React.MouseEvent<HTMLElement>) => any
  onIconClick?: (event: React.MouseEvent<HTMLElement>) => any
}
