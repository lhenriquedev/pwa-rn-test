import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { Separator } from '../../../components/Separator/Separator'

import { MenuItem, MenuItemProps } from './components/MenuItem'

export function SettingsScreen({
  navigation,
}: AppScreenProps<'SettingsScreen'>) {
  const items: MenuItemProps[] = [
    {
      label: 'Termos de uso',
      onPress: () => {
        console.log('Termos de uso')
      },
    },
    {
      label: 'Política de privacidade',
      onPress: () => {
        console.log('Política de privacidade')
      },
    },
    {
      label: 'Modo escuro',
      onPress: () => navigation.navigate('DarkModeScreen'),
    },
  ]

  function renderItem({ item }: ListRenderItemInfo<MenuItemProps>) {
    return <MenuItem {...item} />
  }

  return (
    <Screen canGoBack title="Configurações" flex={1}>
      <FlatList
        data={items}
        bounces={false}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={<Button mt="s48" title="Sair da conta" />}
      />
    </Screen>
  )
}
