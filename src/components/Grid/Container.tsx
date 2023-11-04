import { AnyProp, ChildrenProp, ClassNameProp } from "../../types/types";
import { StyledGrid } from "./StyledGrid";

export interface ContainerProps extends 
ChildrenProp, 
ClassNameProp, 
AnyProp {}

export const Container = ({ children = null, className = '', ...props }: ContainerProps) => {
   // Dividir las clases en un array
  const classes = className.split(' ');

  // Verificar si "container-fluid" está presente y agregarla si no está en las clases
  const hasContainerFluid = classes.includes('container-fluid');
  const containerClass = hasContainerFluid ? 'container-fluid' : 'container';

  // Unir las clases nuevamente en una cadena
  const additionalClasses = classes.filter(item => item !== 'container' && item !== 'container-fluid').join(' ');

  return (
    <>
      {<StyledGrid className={`${containerClass} ${additionalClasses}`} {...props} >{children}</StyledGrid>}
    </>
  )
}

export default Container;

