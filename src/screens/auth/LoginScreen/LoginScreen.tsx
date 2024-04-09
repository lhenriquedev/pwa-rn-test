import React from 'react'

import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'

export function LoginScreen() {
  return (
    <Screen bg="backgroundColor" flex={1}>
      <Text marginBottom="s8" preset="headingLarge" color="grayWhite">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40" color="grayWhite">
        Digite seu e-mail e senha para entrar
      </Text>

      <Text color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  )
}
