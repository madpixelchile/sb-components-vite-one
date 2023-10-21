
import { createGlobalStyle } from 'styled-components'
import fontConfig from '../../styles/fontConfig'
import colors from '../../styles/colors'
import StyledReset from './Reset'

export const StyledThemeProvider = createGlobalStyle`

    ${StyledReset}

    html {
        box-sizing: border-box;
        -ms-overflow-style: scrollbar;
    }

    *,
        *::before,
        *::after {
        box-sizing: inherit;
    }

    body {
        font-family: ${fontConfig['font-family-base']};
        text-rendering: geometricPrecision;
        position: relative;
        /* background-color: $greyscale-white; */
        color: ${colors['text-body']};
        width: 100%;
        height: 100%;
        font-size: ${fontConfig['font-size-base']};
        /* font-weight: $font-weight-regular; */
        line-height: ${fontConfig['line-height-base']};

    }
  
`