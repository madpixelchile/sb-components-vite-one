import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../../components/MyLabel/MyLabel";

const meta = {
    //Se recomienda generar un storybook a parte del proyecto final y con vite
    //El slash genera la visualización en carpetas y subniveles en la navegación principal
    title: 'UI/labels/MyLabel',
    //El componente a incorporar en el muestrario
    component: MyLabel,

    tags:[
        'autodocs'
    ],
    //Para centrar el componente en la mesa o cama (muestrario) de componente en pantalla
    parameters: {
        layout: 'centered'
    },
    //Para que en la documentación los tamaños salgan en formato radio y hacia el lado
    argTypes:{
        size: { control: 'inline-radio' },
        allCaps: {control: 'boolean'},
        color: { control: 'inline-radio' },
        fontColor: { control: 'color' },
        bgColor: { control: 'inline-radio' }
    },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>

//Ejemplo de componente con sus props específicas aplicadas
export const Basic: Story = {
    args:{
        label: 'Basic Label'
    }
};

export const AllCaps: Story = {
    args:{
        label: 'All caps Label',
        size: 'normal',
        allCaps: true
    }
};

export const Secondary: Story = {
    args:{
        label: 'Secondary Label',
        color: 'text-secondary'
    }
};

export const CustomColor: Story = {
    args:{
        label: 'Custom color Label',
        fontColor:'#0366d6'
    }
};

export const BackgroundColor: Story = {
    args:{
        label: 'Custom background color Label',
        bgColor:'bg-primary',
        color: 'text-white'
    }
};