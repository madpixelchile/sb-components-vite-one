import { StyledGrid } from "./StyledGrid";

interface Props{
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
}

export const Col = ( { children = null, className = '', ...props } : Props) => {
  return (
    <>
        {  <StyledGrid className={`col ${className}`} {...props} >{ children }</StyledGrid>  }
    </>
  )
}

export default Col;

