import { Meta, StoryObj } from "@storybook/react";
import { Container } from "../../../components/Grid/Container";
import Row from "../../../components/Grid/Row";
import Col from "../../../components/Grid/Col";
import Heading from "../../../components/Heading/Heading";
import MainTheme from "../../../components/ThemeProvider/MainTheme";
import Text from "../../../components/Text/Text";

const meta = {
    //Se recomienda generar un storybook a parte del proyecto final y con vite
    //El slash genera la visualización en carpetas y subniveles en la navegación principal
    title: 'UI/grid/Row',
    //El componente a incorporar en el muestrario
    component: Row,

    tags:[
        'autodocs'
    ],
    //Para centrar el componente en la mesa o cama (muestrario) de componente en pantalla
    parameters: {
        layout: 'centered'
    },
    //Para que en la documentación los tamaños salgan en un formato determinado
    argTypes:{
        className: { control: 'text' }
    },

} satisfies Meta<typeof Row>;

export default meta;

type Story = StoryObj<typeof meta>

//Ejemplo de componente con sus props específicas aplicadas
export const Basic = ({...props}:Story)=>(
    <MainTheme>
        <Container>
            <Row {...props}>
                <Col>
                    <Heading variant={'h1'} size={'h5'} className={'mb-2'}>Uso de row</Heading>
                    <Text>Podremos agregarle clases de <strong>bootstrap 4</strong>, para poder manejar modificadores de flex-box.</Text>
                </Col>
            </Row>
        </Container>
    </MainTheme>
)
