import React from "react";
import { StyledParagraph } from "./StyledParagraph";
import { StyledSpan } from "./StyledSpan";
import { StyledSmall } from "./StyledSmall";

export interface TextProps {
    children?: React.ReactNode;
    variant?: 'p' | 'span' | 'small' | 'strong' | 'em';
    label?: string;
    [key: string]: any;
}

export const Text: React.FC<TextProps> = (
    {
        children = null,
        variant = 'p',
        label = 'Texto de ejemplo',
        ...props
    }
) => {
    return (
        <>
            { variant === 'p' && <StyledParagraph {...props}>{children || label}</StyledParagraph> }
            { variant === 'span' && <StyledSpan {...props}>{children || label}</StyledSpan> }
            { variant === 'small' && <StyledSmall {...props}>{children || label}</StyledSmall> }
            { variant === 'strong' && <strong {...props}>{children || label}</strong> }
            { variant === 'em' && <em {...props}>{children || label}</em> }
        </>
    )
}

export default Text;

