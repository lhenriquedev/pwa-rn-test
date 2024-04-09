import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter'
import { ThemeProvider } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

import { Box } from './src/components/Box/Box'
import { Button } from './src/components/Button/Button'
import { Text } from './src/components/Text/Text'
import { theme } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StatusBar style="auto" />
        <Text preset="paragraphMedium" bold mb="s8">
          TudoBet - PWA
        </Text>

        <Box flexDirection="row" gap="s8">
          <Button title="Fazer login" />
          <Button title="Criar cadastro" preset="outline" />
        </Box>
      </View>
    </ThemeProvider>
  )
}
