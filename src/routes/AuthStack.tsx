import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen'
import { LoginScreen } from '../screens/auth/LoginScreen/LoginScreen'
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen'

export type AuthStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
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
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  )
}
