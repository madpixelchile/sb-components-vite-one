

import { ThemeProvider } from 'styled-components';
import { StyledThemeProvider } from './StyledThemeProvider';
import { darkMode, lightMode } from '../../styles/theme';

interface Props {
  children?: React.ReactNode;
  theme?: string,
  [key: string]: any;
}

export const MainTheme = ({ children = null, theme = 'light' }:Props) => {
  return (
    <>
        <ThemeProvider theme={theme === 'light' ? lightMode : darkMode }>
            <StyledThemeProvider/>
            { children }
        </ThemeProvider>
    </>
  )
}

export default  MainTheme;
