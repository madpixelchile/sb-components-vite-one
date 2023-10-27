// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#fe018a',

  // UI
  appBg: 'white',
  appContentBg: '#ffffff',
  appBorderColor: '#dadada',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#767676',

  // Form colors
  inputBg: 'white',
  inputBorder: '#f1b0d3',
  inputTextColor: 'black',
  inputBorderRadius: 6,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://res.cloudinary.com/madpixel/image/upload/v1698329660/assets-web/dsystem-madpixel_auvrrc.svg',
  brandTarget: '_self',
});