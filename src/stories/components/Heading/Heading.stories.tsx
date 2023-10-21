import { Meta, StoryObj } from "@storybook/react";
import Heading from "../../../components/Heading/Heading";

const meta = {
    //Se recomienda generar un storybook a parte del proyecto final y con vite
    //El slash genera la visualización en carpetas y subniveles en la navegación principal
    title: 'UI/headings/Heading',
    //El componente a incorporar en el muestrario
    component: Heading,

    tags:[
        'autodocs'
    ],
    //Para centrar el componente en la mesa o cama (muestrario) de componente en pantalla
    parameters: {
        layout: 'centered'
    },
    //Para que en la documentación los tamaños salgan en formato radio y hacia el lado
    argTypes:{
        size: { control: 'select', options: ['','h2','h3','h4','h5','h6'] },
    },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>

//Ejemplo de componente con sus props específicas aplicadas
export const Heading1 = ({...props}:Story)=>(
    <Heading {...props} >Esto es un título</Heading>
)


