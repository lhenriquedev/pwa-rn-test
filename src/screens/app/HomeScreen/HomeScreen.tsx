import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { type WheelData } from 'react-custom-roulette/dist/components/Wheel/types'
import { Platform } from 'react-native'

import { Box } from '../../../components/Box/Box'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { AppTabScreenProps } from '../../../routes'

const rouletteData: WheelData[] = [
  { option: 'Desbloquear Mines', style: { backgroundColor: '#DC0A37' } },
  { option: 'R$ 15 de saldo', style: { backgroundColor: '#E5177B' } },
  { option: 'Aula exclusiva', style: { backgroundColor: '#BD117F' } },
  { option: 'Dicas do Ronald', style: { backgroundColor: '#40287E' } },
  { option: 'R$ 20 de saldo', style: { backgroundColor: '#1B5DA8' } },
  { option: 'Desbloquear Aviator', style: { backgroundColor: '#179ED8' } },
  { option: 'R$ 20 de saldo', style: { backgroundColor: '#209E5D' } },
  { option: 'Roleta ao vivo', style: { backgroundColor: '#64B131' } },
  { option: 'Dia com Ronald', style: { backgroundColor: '#F2E51C' } },
  { option: 'Conversa com Ronald', style: { backgroundColor: '#F6A317' } },
  { option: 'Desbloquear Fortune', style: { backgroundColor: '#E5461E' } },
]

export function HomeScreen({ }: AppTabScreenProps<'HomeScreen'>) {
  const [mustSpin, setMustSpin] = useState(false)
  const [prize, setPrize] = useState<WheelData | undefined>(undefined)
  const isMobile = Platform.OS === 'android' || Platform.OS === 'ios'
  const isWeb = Platform.OS === 'web'

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * rouletteData.length)

      setPrize(rouletteData[newPrizeNumber])
      setMustSpin(true)
    }
  }

  return (
    <Screen flex={1}>
      <Box flex={1} justifyContent="center" alignItems="center" gap="s12">
        {isWeb && (
          <>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prize ? rouletteData.indexOf(prize) : undefined}
              data={rouletteData}
              onStopSpinning={() => {
                setMustSpin(false)
              }}
              fontSize={13}
              textColors={['#fff']}
            />

            <Button
              onPress={handleSpinClick}
              title="Gire para ganhar prêmios"
            />

            <Text>
              {mustSpin
                ? ''
                : prize
                  ? `Parabéns! Você ganhou: ${prize.option}`
                  : ''}
            </Text>
          </>
        )}

        {isMobile && (
          <Text>
            Para visualizar a roleta, acesse a aplicação em um desktop
          </Text>
        )}
      </Box>
    </Screen>
  )
}
