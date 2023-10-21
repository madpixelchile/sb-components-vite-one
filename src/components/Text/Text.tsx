import React from "react";
import { StyledParagraph } from "./StyledParagraph";
import { StyledSpan } from "./StyledSpan";
import { StyledSmall } from "./StyledSmall";

interface Props {
    children?: React.ReactNode;
    variant?: string;
    label?: string;
    [key: string]: any;
}

export const Text: React.FC<Props> = (
    {
        children = null,
        variant = 'p',
        label = 'Example text',
        ...props
    }
) => {
    return (
        <>
            { variant === 'p' && <StyledParagraph {...props}>{children || label}</StyledParagraph> }
            { variant === 'span' && <StyledSpan {...props}>{children || label}</StyledSpan> }
            { variant === 'small' && <StyledSmall {...props}>{children || label}</StyledSmall> }
            { variant === 'strong' && <strong {...props}>{children || label}</strong> }
        </>
    )
}

export default Text;

