import { StyledGrid } from "./StyledGrid";

export interface ContainerProps{
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
}

export const Container = ( { children = null, className = '', ...props } : ContainerProps) => {
  return (
    <>
        {  <StyledGrid className={`container ${className}`} {...props} >{ children }</StyledGrid>  }
    </>
  )
}

export default Container;

