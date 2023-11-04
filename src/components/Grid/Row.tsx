import { AnyProp, ChildrenProp, ClassNameProp } from "../../types/types";
import { StyledGrid } from "./StyledGrid";

export interface Props extends 
ChildrenProp, 
ClassNameProp, 
AnyProp {}

export const Row = ( { children = null, className = '', ...props } : Props) => {
  return (
    <>
        {  <StyledGrid className={`row ${className}`} {...props} >{ children }</StyledGrid>  }
    </>
  )
}

export default Row;

