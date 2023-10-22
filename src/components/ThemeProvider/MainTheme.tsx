

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
      console.log('no object - string light - default lightModeAdded', theme);
      selectedTheme = lightMode;
    }else if(theme === 'dark'){
      console.log('no object - string dark -  default darkModeAdded', theme);
      selectedTheme = darkMode;
    }
  }else{
    if(Object.keys(theme).length === 0){ //!PENDING Compare with the final BASE required properties
      console.log('empty object - default lightMode added', theme);
      selectedTheme = lightMode;
    }else{
      console.log('full object - customMode or theme added', theme);
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
