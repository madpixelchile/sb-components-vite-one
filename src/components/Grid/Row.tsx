import { StyledGrid } from "./StyledGrid";

interface Props{
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
}

export const Row = ( { children = null, className = '', ...props } : Props) => {
  return (
    <>
        {  <StyledGrid className={`row ${className}`} {...props} >{ children }</StyledGrid>  }
    </>
  )
}

export default Row;

