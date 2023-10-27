import { Meta, StoryObj } from "@storybook/react";
import { Container } from "../../../components/Grid/Container";
import Row from "../../../components/Grid/Row";
import Col from "../../../components/Grid/Col";
import MainTheme from "../../../components/ThemeProvider/MainTheme";

const meta = {
    //Se recomienda generar un storybook a parte del proyecto final y con vite
    //El slash genera la visualización en carpetas y subniveles en la navegación principal
    title: 'Components/grid/Container',
    //El componente a incorporar en el muestrario
    component: Container,

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
        children: { control: 'string' }
    },

} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>

//Ejemplo de componente con sus props específicas aplicadas
export const Basic = ({...props}:Story)=>(
    <MainTheme>
        <Container {...props} >
            <Row>
                <Col>
                    <p>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </p>
                </Col>
            </Row>
        </Container>
    </MainTheme>
    
)
