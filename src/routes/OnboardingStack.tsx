import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { OnboardScreen } from '../screens/auth/OnboardScreen/OnboardScreen'

export type OnboardingStackParamList = {
  OnboardingScreen: undefined
}

const Stack = createNativeStackNavigator<OnboardingStackParamList>()

export function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardScreen} />
    </Stack.Navigator>
  )
}
