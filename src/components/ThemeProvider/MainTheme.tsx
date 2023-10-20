

import { ThemeProvider } from 'styled-components'
import { StyledThemeProvider } from './StyledThemeProvider'

export interface MainThemeProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const MainTheme = ({ children = null }:MainThemeProps) => {
  return (
    <>
        <ThemeProvider theme={{}}>
            <StyledThemeProvider/>
            { children }
        </ThemeProvider>
    </>
  )
}

export default  MainTheme;
