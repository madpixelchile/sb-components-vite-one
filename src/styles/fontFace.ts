

import { css } from "styled-components";

import RobotoItalicWoff from './../../assets/fonts/Roboto-Italic.woff';
import RobotoRegularWoff from './../../assets/fonts/Roboto-Regular.woff';
import RobotoBoldWoff from './../../assets/fonts/Roboto-Bold.woff';

export const fontFace = css`

    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: normal;
        src: local('Roboto Italic'), url(${RobotoItalicWoff}) format('woff');
    }
    
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto Regular'), url(${RobotoRegularWoff}) format('woff');
    }
    
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        src: local('Roboto Bold'), url(${RobotoBoldWoff}) format('woff');
    }
    
`;

