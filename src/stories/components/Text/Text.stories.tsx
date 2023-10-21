import { Meta, StoryObj } from "@storybook/react";
import Text from "../../../components/Text/Text";

const meta = {
    //Se recomienda generar un storybook a parte del proyecto final y con vite
    //El slash genera la visualización en carpetas y subniveles en la navegación principal
    title: 'UI/Text',
    //El componente a incorporar en el muestrario
    component: Text,

    tags:[
        'autodocs'
    ],
    //Para centrar el componente en la mesa o cama (muestrario) de componente en pantalla
    parameters: {
        layout: 'centered'
    },
    //Para que en la documentación los tamaños salgan en formato radio y hacia el lado
    argTypes:{
        variant: { control: 'select', options: ['p','span','strong','small'] },
        
    },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>

//Ejemplo de componente con sus props específicas aplicadas
export const BasicText = ({...props}:Story)=>(
    <Text {...props}>Esto es un título</Text>
)


