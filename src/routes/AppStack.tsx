import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { SettingsScreen } from '../screens/app/SettingsScreen/SettingsScreen'

import { AppTabBottomTabParamList, AppTabNavigator } from './AppTabNavigator'

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>
  SettingsScreen: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

interface Props {
  initialRouteName?: keyof AppStackParamList
}

export function AppStack({ initialRouteName = 'AppTabNavigator' }: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}
