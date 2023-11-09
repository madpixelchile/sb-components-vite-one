import { Meta } from "@storybook/react";
import { Box, BoxProps } from "../../../components/Box/Box";
import MainTheme from "../../../components/ThemeProvider/MainTheme";

const meta = {
    //Se recomienda generar un storybook a parte del proyecto final y con vite
    //El slash genera la visualización en carpetas y subniveles en la navegación principal
    title: 'Components/Box/Box',
    //El componente a incorporar en el muestrario
    component: Box,
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
        children: { control: 'text' }
    },

} satisfies Meta<typeof Box>;

export default meta;

//Ejemplo de componente con sus props específicas aplicadas
export const Basic = ({children, ...props}:BoxProps)=>(
    <MainTheme>
        <Box {...props}>
            {
                children
            }
        </Box>
    </MainTheme>
)
