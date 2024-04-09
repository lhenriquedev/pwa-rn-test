import React from 'react'

import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { AuthScreenProps } from '../../../routes'

export function SignUpScreen({ }: AuthScreenProps<'SignUpScreen'>) {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <Button
        // onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  )
}
