import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { OnboardingScreen } from '../screens/onboarding/OnboardingScreen/OnboardingScreen'

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
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    </Stack.Navigator>
  )
}
