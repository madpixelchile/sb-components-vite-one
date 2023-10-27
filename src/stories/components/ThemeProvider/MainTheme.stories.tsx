import { Meta, StoryObj } from "@storybook/react";
import { MainTheme } from "../../../components/ThemeProvider/MainTheme";

const meta = {
    //Se recomienda generar un storybook a parte del proyecto final y con vite
    //El slash genera la visualización en carpetas y subniveles en la navegación principal
    title: 'Components/themes/MainTheme',
    //El componente a incorporar en el muestrario
    component: MainTheme,

    tags:[
        'autodocs'
    ],
    //Para centrar el componente en la mesa o cama (muestrario) de componente en pantalla
    parameters: {
        layout: 'centered'
    },
    //Para que en la documentación los tamaños salgan en un formato determinado
    argTypes:{
        className: { control: 'select', options: ['container','container-fluid'] },
    },

} satisfies Meta<typeof MainTheme>;

export default meta;

type Story = StoryObj<typeof meta>

//Ejemplo de componente con sus props específicas aplicadas
export const Basic = ({...props}:Story)=>(
    <MainTheme {...props} >
        <h1 style={{marginBottom: '20px'}}>Main theme</h1>
        <p style={{marginBottom: '20px'}}>This contains all global reseted styles for html & body for the project.</p>

        <h3 style={{marginBottom: '20px'}}>Example:</h3>
        {
            `
            <MainTheme {...props} >
                <MyAppHere>
            </MainTheme>
            `
        }
    </MainTheme>
)
