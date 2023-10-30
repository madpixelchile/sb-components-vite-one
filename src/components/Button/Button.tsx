import React, { forwardRef, Ref } from "react";
import { StyledButton } from "./StyledButton";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: string;
  [x: string]: any;
}

export const Button = forwardRef(({ children = '', className = '', variant = 'button',  ...props }:ButtonProps, ref: Ref<HTMLButtonElement>) => {

  let mainVariant = variant;

  if(variant === 'link'){
    mainVariant = 'as-link'
  }
  if(variant === 'outlined'){
    mainVariant = 'outlined'
  }

  return (
    <>
        <StyledButton
            className={`${ mainVariant } ${ className }`}
            ref={ref}
            {...props}
        >{ children }</StyledButton>
    </>
  )
})