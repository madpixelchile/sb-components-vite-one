import { Meta } from "@storybook/react";
import { Button, ButtonProps } from "../../../components/Button/Button";
import MainTheme from "../../../components/ThemeProvider/MainTheme";

const meta = {
    //Se recomienda generar un storybook a parte del proyecto final y con vite
    //El slash genera la visualización en carpetas y subniveles en la navegación principal
    title: 'Components/Button/Button',
    //El componente a incorporar en el muestrario
    component: Button,
    //Genera la documentación general del componente
    tags:[
        'autodocs'
    ],
    //Para centrar el componente en la mesa o cama (muestrario) de componente en pantalla
    parameters: {
        layout: 'centered'
    },
    //Para que en la documentación los tamaños salgan en un formato determinado
    argTypes:{
        className: { control: 'text' },
        variant: { control: 'select', options: ['','link', 'outlined'] },
        children: { control: 'text' }
    },

} satisfies Meta<typeof Button>;

export default meta;

//Ejemplo de componente con sus props específicas aplicadas
export const Basic = ({children = 'Click me', ...props}:ButtonProps)=>(
    <MainTheme>
        <Button { ...props }>{ children }</Button>
    </MainTheme>
    
)
