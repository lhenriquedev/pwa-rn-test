import { Dimensions, Image } from 'react-native'

import { Box } from '../../../components/Box/Box'
import { Text } from '../../../components/Text/Text'

import { OnboardPageItem } from './OnboardScreen'

const SCREEN_WIDTH = Dimensions.get('screen').width

type OnboardPageProps = {
  pageItem: OnboardPageItem
}

export function OnboardPage({ pageItem }: OnboardPageProps) {
  return (
    <Box width={SCREEN_WIDTH} px="s16" pb="s32" justifyContent="center">
      <Box mb="s32">
        <Image
          source={pageItem.image}
          alt={pageItem.alt}
          style={{ width: SCREEN_WIDTH, height: 400, resizeMode: 'contain' }}
        />
      </Box>

      <Box alignItems="center">
        <Text preset="headingSmall" textAlign="center" mb="s8" color="gray6">
          {pageItem.title}
        </Text>
        <Text preset="paragraphSmall" textAlign="center" color="gray7">
          {pageItem.firstSubtitle}
        </Text>
        <Text preset="paragraphSmall" textAlign="center" color="gray7">
          {pageItem.secondSubtitle}
        </Text>
      </Box>
    </Box>
  )
}
