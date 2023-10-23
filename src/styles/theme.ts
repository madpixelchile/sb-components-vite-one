


import { lightModeColors, darkModeColors } from './colors';

import fontConfig from './fontConfig';

export const lightMode = {
  fontConfig: {
    ...fontConfig,
  },
  colors: {
    ...lightModeColors
  }
}

export const darkMode = {
  fontConfig: {
    ...fontConfig,
  },
  colors: {
    ...darkModeColors
  }
}
