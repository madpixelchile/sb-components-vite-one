import { AnyProp, ChildrenProp, ClassNameProp } from "../../types/types";
import { StyledGrid } from "./StyledGrid";

export interface Props extends 
ChildrenProp, 
ClassNameProp, 
AnyProp {}

export const Col = ( { children = null, className = 'col', ...props } : Props) => {
  return (
    <>
        {  <StyledGrid className={`${className}`} {...props} >{ children }</StyledGrid>  }
    </>
  )
}

export default Col;

