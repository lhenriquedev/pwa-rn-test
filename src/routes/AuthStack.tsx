import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { IconProps } from '../components/Icon/Icon'
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen'
import { LoginScreen } from '../screens/auth/LoginScreen/LoginScreen'
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen'
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen'

export type AuthStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
  SuccessScreen: {
    title: string
    description: string
    icon: Pick<IconProps, 'name' | 'color' | 'fillColor'>
  }
  ForgotPasswordScreen: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  )
}
