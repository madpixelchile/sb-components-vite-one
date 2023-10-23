
import { createGlobalStyle, css } from 'styled-components'
import StyledReset from './Reset';

export const StyledThemeProvider = createGlobalStyle`

    ${StyledReset}

    ${({ theme }) => {

        const { fontConfig, colors } = theme;   

        return css`

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

    

    /* ${({ theme }) => {
        if (theme) {
            return css`
                    body{
                        background-color: red !important;
                    }
                `
        }
    }
    } */



    

  
`