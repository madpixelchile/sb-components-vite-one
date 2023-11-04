

import { ThemeProvider } from 'styled-components';
import { StyledThemeProvider } from './StyledThemeProvider';
import { darkMode, lightMode } from '../../styles/theme';
import { AnyProp, ChildrenProp } from '../../types/types';

export interface MainThemeProps extends
  ChildrenProp,
  AnyProp {
  theme?: string | {},
  testMode?: boolean,
}

export const MainTheme = ({ children = null, testMode = false, theme = 'light' }: MainThemeProps) => {

  let selectedTheme: string | object = lightMode;
  let selectedMode: string = '';

  if (typeof theme !== 'object') {
    if (theme === 'light') {
      //No object - string light - default lightModeAdded
      selectedMode = 'light';
      selectedTheme = lightMode;
    } else if (theme === 'dark') {
      //No object - string dark -  default darkModeAdded
      selectedMode = 'dark';
      selectedTheme = darkMode;
    }
  } else if (typeof theme === 'object') {
    if (Object.keys(theme).length === 0) { //!PENDING Compare with the final BASE required properties
      //Empty object - Default lightMode added
      selectedMode = 'light';
      selectedTheme = lightMode;
    } else {
      //Full object - CustomMode or theme added
      selectedMode = 'custom-theme-loaded';
      selectedTheme = theme;
    }
  }

  return (
    <>
      {testMode && <span aria-label={'theme-provider-theme'}>{selectedMode}</span>}
      <ThemeProvider theme={selectedTheme}>
        <StyledThemeProvider />
        {children}
      </ThemeProvider>
    </>
  )
}

export default MainTheme;
