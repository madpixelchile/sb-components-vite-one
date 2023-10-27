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
    title: 'Components/grid/Row',
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
                <Col className={'col-md-6'}>
                    <Heading variant={'h1'} size={'h5'} className={'mb-2'}>Uso de row</Heading>
                    <Text className={'mb-3'}>Podremos agregarle clases de <strong>bootstrap 4</strong>, para poder manejar modificadores de flex-box.</Text>
                    <Text><strong>.no-gutters</strong>: Al agregar esta clase a una .row, se eliminan los espacios (gutters) entre las columnas en la fila. De forma predeterminada, las filas de Bootstrap tienen espacios.</Text>
                    <Text><strong>.align-items-start</strong>: Alinea los elementos verticalmente en la parte superior de la fila.</Text>
                    <Text><strong>.align-items-center</strong>: Alinea los elementos verticalmente en el centro de la fila.</Text>
                    <Text><strong>.align-items-end</strong>: Alinea los elementos verticalmente en la parte inferior de la fila.</Text>
                    <Text><strong>.align-items-baseline</strong>: Alinea los elementos verticalmente de modo que las líneas de base del texto se alineen.</Text>
                    <Text><strong>.align-items-stretch</strong>: Estira los elementos para ocupar la altura completa de la fila.</Text>
                </Col>
                <Col className={'col-md-6'}>
                    <Text className={'mt-5'}><strong>.justify-content-start</strong>: Alinea los elementos horizontalmente al principio de la fila.</Text>
                    <Text><strong>.justify-content-end</strong>: Alinea los elementos horizontalmente al final de la fila.</Text>
                    <Text><strong>.justify-content-center</strong>: Centra los elementos horizontalmente en la fila.</Text>
                    <Text><strong>.justify-content-between</strong>: Alinea los elementos de manera uniforme en la fila, con espacio entre ellos.</Text>
                    <Text><strong>.justify-content-around</strong>: Alinea los elementos de manera uniforme en la fila, con espacio alrededor de ellos.</Text>
                    <Text><strong>.justify-content-evenly</strong>: Alinea los elementos de manera uniforme en la fila, con espacio igual alrededor de ellos.</Text>
                </Col>
            </Row>
        </Container>
    </MainTheme>
)
