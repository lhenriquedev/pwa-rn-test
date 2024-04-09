import { IconProps } from '../components/Icon/Icon'

import { AppTabBottomTabParamList } from './AppTabNavigator'

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string
    icon: {
      focused: IconProps['name']
      unfocused: IconProps['name']
    }
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
}
