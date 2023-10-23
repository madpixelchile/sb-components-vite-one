
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const StyledParagraph = styled.p`

    ${({ theme }) => {
        const { fontConfig, colors } = theme;

        return `

            font-family: ${fontConfig["font-family-base"]};
            line-height: ${fontConfig["line-height-base"]};
            font-size: ${fontConfig["font-size-text-6"]};

            @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
                font-size: ${fontConfig["font-size-base"]};
            }

            span{
                color: ${colors['color-span']};
            }

        `;
    }}

`;