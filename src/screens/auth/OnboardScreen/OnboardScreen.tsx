import { useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'

import BackgroundPattern from '../../../assets/images/backgroundPattern.png'
import Logo from '../../../assets/images/logo.png'
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

const SCREEN_WIDTH = Dimensions.get('screen').width

export function OnboardScreen() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  function renderItem({ item }: ListRenderItemInfo<OnboardPageItem>) {
    return <OnboardPage pageItem={item} />
  }

  function updateCurrentIndex(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / SCREEN_WIDTH)

    setCurrentSlideIndex(currentIndex)
  }

  return (
    <Box flex={1} bg="backgroundColor">
      <Image
        source={BackgroundPattern}
        alt="Desenhos de linhas"
        resizeMode="contain"
        style={{ position: 'absolute' }}
      />

      <Box alignItems="center" bg="carrotSecondary">
        <Image source={Logo} height={64} alt="Logo do tudobet" />
      </Box>

      <Box flex={1} justifyContent="center">
        <FlatList
          onScroll={updateCurrentIndex}
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
              backgroundColor={
                currentSlideIndex === index ? 'primary' : 'gray2'
              }
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
