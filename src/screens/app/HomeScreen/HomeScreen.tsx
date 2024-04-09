import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { Separator } from '../../../components/Separator/Separator'
import { AppTabScreenProps } from '../../../routes'
import { MenuItem, MenuItemProps } from '../SettingsScreen/components/MenuItem'

export function HomeScreen({ }: AppTabScreenProps<'HomeScreen'>) {
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
  ]

  function renderItem({ item }: ListRenderItemInfo<MenuItemProps>) {
    return <MenuItem {...item} />
  }

  return (
    <Screen title="Home" flex={1}>
      <FlatList
        data={items}
        bounces={false}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <Button
            mt="s48"
            title="Sair da conta"
            onPress={() => {
              console.log('Sair da conta')
            }}
          />
        }
      />
    </Screen>
  )
}
