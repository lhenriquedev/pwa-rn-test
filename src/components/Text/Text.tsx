import { createText } from '@shopify/restyle'
import React from 'react'
import { TextStyle } from 'react-native'

import { Theme } from '../../theme'

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall'

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },

  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

  paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
  paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
}

export const $fontFamily = {
  black: 'Inter_900Black',
  extraBold: 'Inter_800ExtraBold',
  bold: 'Inter_700Bold',
  semiBold: 'Inter_600SemiBold',
  medium: 'Inter_500Medium',
  regular: 'Inter_400Regular',
  light: 'Inter_300Light',
  extraLight: 'Inter_200ExtraLight',
  thin: 'Inter_100Thin',
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  semiBold?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return $fontFamily.bold
  }
  switch (true) {
    case bold:
      return $fontFamily.bold

    case semiBold:
      return $fontFamily.medium

    default:
      return $fontFamily.regular
  }
}

const SRText = createText<Theme>()
type SRTextProps = React.ComponentProps<typeof SRText>

export interface TextProps extends SRTextProps {
  preset?: TextVariants
  bold?: boolean
  italic?: boolean
  semiBold?: boolean
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  semiBold,
  style,
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, semiBold)
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], { fontFamily }, style]}
      {...sRTextProps}
    >
      {children}
    </SRText>
  )
}
