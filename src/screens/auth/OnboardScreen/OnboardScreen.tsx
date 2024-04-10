import { FlatList, ListRenderItemInfo } from 'react-native'

import { Box } from '../../../components/Box/Box'
import { Button } from '../../../components/Button/Button'
import { onboardingSlides } from '../../../data/onboarding-data'

import { OnboardPage } from './OnboardPage'

export type OnboardPageItem = {
  title: string
  firstSubtitle: string
  secondSubtitle: string
  image: any
  alt: string
}

export function OnboardScreen() {
  function renderItem({ item }: ListRenderItemInfo<OnboardPageItem>) {
    return <OnboardPage pageItem={item} />
  }

  return (
    <Box flex={1} bg="backgroundColor" paddingVertical="s32">
      <Box flex={1} justifyContent="center">
        <FlatList
          data={onboardingSlides}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          style={{ flexGrow: 0 }}
        />

        <Box
          flexDirection="row"
          gap="s4"
          alignContent="center"
          justifyContent="center"
        >
          {onboardingSlides.map((_, index) => (
            <Box
              key={index}
              width={8}
              height={8}
              borderRadius="s12"
              backgroundColor={index === 0 ? 'primary' : 'gray2'}
            />
          ))}
        </Box>
      </Box>

      <Box paddingHorizontal="s16">
        <Button title="Acessar de graça" mb="s52" />
      </Box>
    </Box>
  )
}
