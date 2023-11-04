import { forwardRef, Ref } from "react";
import { StyledButton } from "./StyledButton";
import { AnyProp, ChildrenProp, ClassNameProp } from "../../types/types";

export interface ButtonProps extends 
  ChildrenProp,
  ClassNameProp,
  AnyProp 
{
  variant?: 'button' | 'link' | 'outlined';
}

export const Button = forwardRef(({ children = '', className = '', variant = 'button',  ...props }:ButtonProps, ref: Ref<HTMLButtonElement>) => {

  let mainVariant: string = variant;

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