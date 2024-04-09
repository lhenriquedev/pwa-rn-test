import React from 'react'

import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { AuthScreenProps } from '../../../routes'

export function ForgotPasswordScreen({ }: AuthScreenProps<'ForgotPasswordScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <Button title="Recuperar senha" />
    </Screen>
  )
}
