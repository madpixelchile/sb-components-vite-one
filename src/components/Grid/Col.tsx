import { StyledGrid } from "./StyledGrid";

interface Props{
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
}

export const Col = ( { children = null, className = 'col', ...props } : Props) => {
  return (
    <>
        {  <StyledGrid className={`${className}`} {...props} >{ children }</StyledGrid>  }
    </>
  )
}

export default Col;

