import React from "react";
import { StyledHeading1, StyledHeading2, StyledHeading3, StyledHeading4, StyledHeading5, StyledHeading6 } from "./StyledHeadings";
import { AnyProp, ChildrenProp, ClassNameProp, LabelProp } from "../../types/types";


type HeadingSizeProp = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends
ClassNameProp,
ChildrenProp,
LabelProp,
AnyProp
{
    variant?: HeadingSizeProp;
    size?: HeadingSizeProp;
}

export const Heading: React.FC<HeadingProps> = (
    {
        children = null,
        variant = 'h1',
        label = 'Example Heading',
        size = '',
        className = '',
        ...props
    }
) => {

    const HeadingComponents: { [key: string]: React.ElementType } = {
        h1: StyledHeading1,
        h2: StyledHeading2,
        h3: StyledHeading3,
        h4: StyledHeading4,
        h5: StyledHeading5,
        h6: StyledHeading6,
    };

    const SelectedHeading = HeadingComponents[variant];

    return (
        <>
            <>
                {
                    SelectedHeading && (
                        <SelectedHeading className={`${className} ${size}`} {...props}>
                            {children || label}
                        </SelectedHeading>
                    )
                }
            </>

        </>
    )
}

export default Heading;

