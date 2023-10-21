
import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";
import fontConfig from "../../styles/fontConfig";

const commonStyles = css`
    font-family: ${fontConfig["font-family-base"]};
    line-height: ${fontConfig["line-height-heading"]};
`;

const h1Styles = css`
  font-size: ${fontConfig["font-size-headline-6"]};

  @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
    font-size: ${fontConfig["font-size-headline-3"]};
  }

  @media only screen and (min-width: ${breakpoints["screen-xl"]}) {
    font-size: ${fontConfig["font-size-headline-1"]};
  }
`;

const h2Styles = css`
  font-size: ${fontConfig["font-size-text-2"]};

  @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
    font-size: ${fontConfig["font-size-headline-4"]};
  }

  @media only screen and (min-width: ${breakpoints["screen-xl"]}) {
    font-size: ${fontConfig["font-size-headline-2"]};
  }
`;

const h3Styles = css`
  font-size: ${fontConfig["font-size-text-3"]};

  @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
    font-size: ${fontConfig["font-size-headline-5"]};
  }

  @media only screen and (min-width: ${breakpoints["screen-xl"]}) {
    font-size: ${fontConfig["font-size-headline-3"]};
  }
`;

const h4Styles = css`
  font-size: ${fontConfig["font-size-text-4"]};

  @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
    font-size: ${fontConfig["font-size-headline-6"]};
  }

  @media only screen and (min-width: ${breakpoints["screen-xl"]}) {
    font-size: ${fontConfig["font-size-headline-4"]};
  }
`;


const h5Styles = css`
  font-size: ${fontConfig["font-size-text-5"]};

  @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
    font-size: ${fontConfig["font-size-text-1"]};
  }

  @media only screen and (min-width: ${breakpoints["screen-xl"]}) {
    font-size: ${fontConfig["font-size-headline-5"]};
  }
`;

const h6Styles = css`
  font-size: ${fontConfig["font-size-text-6"]};

  @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
    font-size: ${fontConfig["font-size-text-2"]};
  }

  @media only screen and (min-width: ${breakpoints["screen-xl"]}) {
    font-size: ${fontConfig["font-size-headline-6"]};
  }
`;


export const StyledHeading1 = styled.h1`

    ${commonStyles}

    ${h1Styles}

    &.h2{
        ${h2Styles}
    }

    &.h3{
        ${h3Styles}
    }

    &.h4{
        ${h4Styles}
    }

    &.h5{
        ${h5Styles}
    }

    &.h6{
        ${h6Styles}
    }

`;


export const StyledHeading2 = styled.h2`

    ${commonStyles}

    ${h2Styles}

    &.h2{
        ${h2Styles}
    }

    &.h3{
        ${h3Styles}
    }

    &.h4{
        ${h4Styles}
    }

    &.h5{
        ${h5Styles}
    }

    &.h6{
        ${h6Styles}
    }

`;


export const StyledHeading3 = styled.h3`

    ${commonStyles}

    ${h3Styles}

    &.h2{
        ${h2Styles}
    }

    &.h3{
        ${h3Styles}
    }

    &.h4{
        ${h4Styles}
    }

    &.h5{
        ${h5Styles}
    }

    &.h6{
        ${h6Styles}
    }

`;


export const StyledHeading4 = styled.h4`

    ${commonStyles}

    ${h4Styles}

    &.h2{
        ${h2Styles}
    }

    &.h3{
        ${h3Styles}
    }

    &.h4{
        ${h4Styles}
    }

    &.h5{
        ${h5Styles}
    }

    &.h6{
        ${h6Styles}
    }

`;


export const StyledHeading5 = styled.h5`

    ${commonStyles}

    ${h5Styles}

    &.h2{
        ${h2Styles}
    }

    &.h3{
        ${h3Styles}
    }

    &.h4{
        ${h4Styles}
    }

    &.h5{
        ${h5Styles}
    }

    &.h6{
        ${h6Styles}
    }

`;




export const StyledHeading6 = styled.h6`

    ${commonStyles}

    ${h6Styles}

    &.h2{
        ${h2Styles}
    }

    &.h3{
        ${h3Styles}
    }

    &.h4{
        ${h4Styles}
    }

    &.h5{
        ${h5Styles}
    }

    &.h6{
        ${h6Styles}
    }

`;