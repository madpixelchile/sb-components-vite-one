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
    title: 'Components/grid/Col',
    //El componente a incorporar en el muestrario
    component: Col,

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
        ['.col-']: { 
            description: 'Esta clase define una columna sin importar el tamaño del dispositivo. Ajusta automáticamente el ancho de la columna según el contenido.',
            control: 'none'
        },
        ['.col-sm-']: { 
            description: 'Especifica el número de columnas en dispositivos pequeños (tabletas).',
            control: 'none'
        },
        ['.col-md-']: { 
            description: 'Especifica el número de columnas en dispositivos medianos (pantallas de computadoras portátiles).',
            control: 'none'
        },
        ['.col-lg-']: { 
            description: 'Especifica el número de columnas en dispositivos grandes (pantallas de computadoras de escritorio).',
            control: 'none'
        },
        ['.no-gutters']: { 
            description: 'Al agregar esta clase a una .row, se eliminan los espacios (gutters) entre las columnas en la fila. De forma predeterminada, las filas de Bootstrap tienen espacios.',
            control: 'none'
        },
        ['.col-xl-']: { 
            description: 'Especifica el número de columnas en dispositivos extra grandes (pantallas grandes de alta resolución).',
            control: 'none'
        },
        ['.col-12']: { 
            description: 'Esta clase establece la columna para ocupar 12 espacios en la cuadrícula, ocupando todo el ancho del contenedor padre.',
            control: 'none'
        },
        ['.col-auto']: { 
            description: 'Hace que la columna tenga un ancho automático basado en el contenido dentro de ella.',
            control: 'none'
        },
        ['.col-ml-auto']: { 
            description: 'Empuja la columna hacia la derecha tanto como sea posible dentro de su contenedor padre.',
            control: 'none'
        },
        ['.col-mr-auto']: { 
            description: 'Empuja la columna hacia la izquierda tanto como sea posible dentro de su contenedor padre.',
            control: 'none'
        },
        ['.col-sm-push-']: { 
            description: 'Empuja la columna hacia la derecha en dispositivos pequeños.',
            control: 'none'
        },
        ['.col-sm-pull-']: { 
            description: 'Toma la columna hacia la izquierda en dispositivos pequeños.',
            control: 'none'
        },
        ['.col-sm-offset-']: { 
            description: 'Agrega un margen izquierdo en dispositivos pequeños.',
            control: 'none'
        },
        ['.col-order-']: { 
            description: 'Establece el orden de la columna dentro de su contenedor.',
            control: 'none'
        },
        ['.align-self-start']: { 
            description: 'Alinea la columna en la parte superior del área de contenedor.',
            control: 'none'
        },
        ['.align-self-center']: { 
            description: 'Alinea la columna en el centro verticalmente dentro del área de contenedor.',
            control: 'none'
        },
        ['.align-self-end']: { 
            description: 'Alinea la columna en la parte inferior del área de contenedor.',
            control: 'none'
        },
        ['.align-self-stretch']: { 
            description: 'Estira la columna para llenar el área de contenedor verticalmente.',
            control: 'none'
        },
      
    },

} satisfies Meta<typeof Col>;

export default meta;

type Story = StoryObj<typeof meta>

//Ejemplo de componente con sus props específicas aplicadas
export const Basic = ({...props}:Story)=>(
    <MainTheme>
        <Container>
            <Row {...props}>
                <Col className={'col-12'}>
                    <Heading variant={'h1'} size={'h5'} className={'mb-2 mb-4'}>Uso de Cols</Heading>
                    <Text className={'mb-3 mb-2'}>Podremos agregarle clases de bootstrap para manejar el ancho de las grillas entre otras propiedades.</Text>
                    <Text className={'mb-3 mb-4'}>Tendremos la posibilidad de agregar hasta 12 columnas</Text>
                </Col>
            </Row>
            <Row {...props}>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100px',
                        }}
                    >
                    </div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
                <Col className={'col-md-1'} style={{background: '#fafafa'}}>
                    <div 
                        style={{
                            background: '#eaeaea',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </Col>
            </Row>
        </Container>
    </MainTheme>
)
