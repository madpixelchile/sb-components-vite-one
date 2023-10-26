
import { createGlobalStyle, css } from 'styled-components'
import StyledReset from './StyledReset';
import { StyledHelpers } from './StyledHelpers';
import { fontFace } from '../../styles/fontFace';

export const StyledThemeProvider = createGlobalStyle`

    //Reset
    ${StyledReset}

    ${({ theme }) => {

        const { fontConfig, colors } = theme;   

        return css`

                ${fontFace}

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
                    background-color: ${colors['bg-color']};
                    color: ${colors['text-body']};
                    width: 100%;
                    height: 100%;
                    font-size: ${fontConfig['font-size-base']};
                    font-weight: 400;
                    line-height: ${fontConfig['line-height-base']};
                }
                
            `
    }}

    //Helpers
    ${StyledHelpers}

  
`