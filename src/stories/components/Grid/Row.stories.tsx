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
        className: { 
            control: 'text',
        },
        ['.no-gutters']: { 
            description: 'Al agregar esta clase a una .row, se eliminan los espacios (gutters) entre las columnas en la fila. De forma predeterminada, las filas de Bootstrap tienen espacios.',
            control: 'none'
        },
        ['.align-items-start']: { 
            description: 'Alinea los elementos verticalmente en la parte superior de la fila',
            control: 'none'
        },
        ['.align-items-center']: { 
            description: 'Alinea los elementos verticalmente en el centro de la fila.',
            control: 'none'
        },
        ['.align-items-end']: { 
            description: 'Alinea los elementos verticalmente en la parte inferior de la fila.',
            control: 'none'
        },
        ['.align-items-baseline']: { 
            description: 'Alinea los elementos verticalmente de modo que las líneas de base del texto se alineen.',
            control: 'none'
        },
        ['.align-items-stretch']: { 
            description: 'Estira los elementos para ocupar la altura completa de la fila.',
            control: 'none'
        },
        ['.justify-content-start']: { 
            description: 'Alinea los elementos horizontalmente al principio de la fila.',
            control: 'none'
        },
        ['.justify-content-end']: { 
            description: 'Alinea los elementos horizontalmente al final de la fila.',
            control: 'none'
        },
        ['.justify-content-center']: { 
            description: 'Centra los elementos horizontalmente en la fila',
            control: 'none'
        },
        ['.justify-content-between']: { 
            description: 'Alinea los elementos de manera uniforme en la fila, con espacio entre ellos.',
            control: 'none'
        },
        ['.justify-content-around']: { 
            description: 'Alinea los elementos de manera uniforme en la fila, con espacio alrededor de ellos.',
            control: 'none'
        },
        ['.justify-content-evenly']: { 
            description: 'Alinea los elementos de manera uniforme en la fila, con espacio igual alrededor de ellos.',
            control: 'none'
        }
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
                    <Text>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad 
                        nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. 
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. 
                        Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo 
                        officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris 
                        ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. 
                        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </Text>
                </Col>
                <Col className={'col-md-6 mt-5'}>
                    <Text>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                        labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                        animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                        aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                        pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                        commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                        proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                        eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                        culpa duis.
                    </Text>
                </Col>
            </Row>
        </Container>
    </MainTheme>
)
