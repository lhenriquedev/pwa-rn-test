import React from 'react'
import { Platform } from 'react-native'

import { Box } from '../../../components/Box/Box'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { AppTabScreenProps } from '../../../routes'

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const isAndroid = Platform.OS === 'android'
  const isIOS = Platform.OS === 'ios'
  const isWeb = Platform.OS === 'web'

  return (
    <Screen title="Home" flex={1} bg="backgroundColor">
      {(isAndroid || isIOS) && <Button title="Link para fora" />}

      {isWeb && (
        <Box flex={1}>
          <iframe
            frameBorder={0}
            src="https://onabet.com/casino"
            height={'100%'}
          />
        </Box>
      )}
    </Screen>
  )
}
