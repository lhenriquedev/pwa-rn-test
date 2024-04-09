import React from 'react'

import { PressableBox } from '../../../../components/Box/Box'
import { Icon } from '../../../../components/Icon/Icon'
import { Text } from '../../../../components/Text/Text'

export type MenuItemProps = {
  label: string
  onPress: () => void
}
export function MenuItem({ label, onPress }: MenuItemProps) {
  return (
    <PressableBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      paddingVertical="s16"
      justifyContent="space-between"
    >
      <Text semiBold>{label}</Text>
      <Icon name="chevronRight" />
    </PressableBox>
  )
}
