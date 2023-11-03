import React from "react";
import { StyledParagraph } from "./StyledParagraph";
import { StyledSpan } from "./StyledSpan";
import { StyledSmall } from "./StyledSmall";
import { AnyProp, ChildrenProp, LabelProp } from '../../types/types';

export interface TextProps extends 
ChildrenProp,
LabelProp,
AnyProp
{
    variant?: 'p' | 'span' | 'small' | 'strong' | 'em';
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

