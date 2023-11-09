
import { AnyProp, ChildrenProp, ClassNameProp } from "../../types/types";

export interface BoxProps extends 
ClassNameProp,
ChildrenProp,
AnyProp
{}

export const Box = ({children, className = '', ...props}: BoxProps) => {
  return (
    <div className={className} {...props}>
        { children }
    </div>
  )
}

export default Box;