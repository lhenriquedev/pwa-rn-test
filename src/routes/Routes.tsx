import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { ActivityIndicator } from '../components/ActivityIndicator/ActivityIndicator'
import { Box } from '../components/Box/Box'

import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'
import { Stacks, useRouter } from './useRouter'

function LoadingScreen() {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      justifyContent="center"
      alignItems="center"
    >
      <ActivityIndicator size="large" />
    </Box>
  )
}

const stacks: Record<Stacks, React.ReactElement> = {
  Loading: <LoadingScreen />,
  Auth: <AuthStack />,
  App: <AppStack />,
}

export function Router() {
  const stack = useRouter()

  const Stack = stacks[stack]

  return <NavigationContainer>{Stack}</NavigationContainer>
}
