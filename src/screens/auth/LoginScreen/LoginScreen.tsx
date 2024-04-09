import React from 'react'

import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'

export function LoginScreen() {
  // function navigateToSignUpScreen() {
  //   navigation.navigate('SignUpScreen');
  // }

  // function navigateToForgotPasswordScreen() {
  //   navigation.navigate('ForgotPasswordScreen');
  // }

  return (
    <Screen scrollable canGoBack>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Text
        // onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold
      >
        Esqueci minha senha
      </Text>

      <Button marginTop="s48" title="Entrar" />
      <Button
        // onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  )
}
