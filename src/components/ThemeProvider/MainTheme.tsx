

import { ThemeProvider } from 'styled-components';
import { StyledThemeProvider } from './StyledThemeProvider';
import { darkMode, lightMode } from '../../styles/theme';

export interface MainThemeProps {
  children?: React.ReactNode;
  theme?: string | {},
  [key: string]: any;
}

export const MainTheme = ({ children = null, theme = 'light' }:MainThemeProps) => {

  let selectedTheme: string | object = lightMode;

  if(typeof theme !== 'object'){
    if(theme === 'light'){
      //No object - string light - default lightModeAdded
      selectedTheme = lightMode;
    }else if(theme === 'dark'){
      //No object - string dark -  default darkModeAdded
      selectedTheme = darkMode;
    }
  }else if(typeof theme === 'object'){
    if(Object.keys(theme).length === 0){ //!PENDING Compare with the final BASE required properties
      //Empty object - Default lightMode added
      selectedTheme = lightMode;
    }else{
      //Full object - CustomMode or theme added
      selectedTheme = theme;
    }
  }

  return (
    <>
        <ThemeProvider theme={ selectedTheme }>
            <StyledThemeProvider/>
            { children }
        </ThemeProvider>
    </>
  )
}

export default  MainTheme;
