import styled from "styled-components";

export const StyledButton = styled.button`

    
${({ theme }) => {
    const { colors } = theme;
    return `
            
          font-size: 16px;
          color: ${colors.primary};
          background-color: ${colors["btn-primary"]};
          border-radius: 6px;
          border: none;
          padding: 8px 24px;
          transition: all 300ms ease;
          cursor: pointer;

          border: solid 1px transparent;

          &:hover{
            color: white;
            background-color: ${colors["btn-primary-hover"]};
            transition: all 300ms ease;
          }
          &:active{
            background-color: #000;
          }
          &.as-link{
            background: none;
            padding: 0;
            display: inline-block;
            text-decoration: underline;
            color: ${colors['color-link']};
            transition: color 300ms ease;
            &:hover{
              color: ${colors['color-link-hover']};
              transition: color 0ms ease;
            }
          }

          &.outlined{
            background-color: transparent;
            border-color: ${colors["btn-primary"]};
            color: ${colors["btn-primary"]};

            &:hover{
              background-color: ${colors["btn-primary"]};
              color: ${colors.primary};
            }

            &:active{
              background-color: ${colors["btn-primary-hover"]};
              color: ${colors.primary};
            }

          }

          .loading-area{
            display: flex;
            align-items: center;
          }

        `
  }}

`;