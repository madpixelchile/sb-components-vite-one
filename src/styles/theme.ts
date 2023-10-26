


import { lightModeColors, darkModeColors } from './colors';
import { 
  breakpoints,
  gutters,
  fontConfig,
} from './index';

export const lightMode = {
  breakpoints: {
    ...breakpoints
  },
  gutters: {
    ...gutters
  },
  fontConfig: {
    ...fontConfig,
  },
  colors: {
    ...lightModeColors
  }
}

export const darkMode = {
  breakpoints: {
    ...breakpoints
  },
  gutters: {
    ...gutters
  },
  fontConfig: {
    ...fontConfig,
  },
  colors: {
    ...darkModeColors
  }
}
