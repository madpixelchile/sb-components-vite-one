import { forwardRef, Ref } from "react";
import { StyledButton } from "./StyledButton";
import { AnyProp, ChildrenProp, ClassNameProp } from "../../types/types";

export interface ButtonProps extends
  ChildrenProp,
  ClassNameProp,
  AnyProp {
  variant?: 'button' | 'link' | 'outlined';
  isLoading?: boolean;
}

export const Button = forwardRef(({ children = '', className = '', variant = 'button', isLoading = false, ...props }: ButtonProps, ref: Ref<HTMLButtonElement>) => {

  let mainVariant: string = variant;

  if (variant === 'link') {
    mainVariant = 'as-link'
  }
  if (variant === 'outlined') {
    mainVariant = 'outlined'
  }

  return (
    <>
      <StyledButton
        className={`${mainVariant} ${className}`}
        ref={ref}
        {...props}
      >
        {
          isLoading ?
            <div className="loading-area">
              <i className="mr-3">i</i>
              <span>Loading</span>
            </div>
            :
            children
        }
      </StyledButton>
    </>
  )
})