import { Meta } from "@storybook/react";
import { Modal, ModalProps } from "../../../components/Modal/Modal";
import MainTheme from "../../../components/ThemeProvider/MainTheme";
import { Button } from "../../../components/Button/Button";
import { useState } from "react";
import Row from "../../../components/Grid/Row";
import Col from "../../../components/Grid/Col";
import Container from "../../../components/Grid/Container";
import Heading from "../../../components/Heading/Heading";
import Text from "../../../components/Text/Text";

const meta = {
    //Se recomienda generar un storybook a parte del proyecto final y con vite
    //El slash genera la visualización en carpetas y subniveles en la navegación principal
    title: 'Components/modal/Modal',
    //El componente a incorporar en el muestrario
    component: Modal,

    tags:[
        'autodocs'
    ],
    //Para centrar el componente en la mesa o cama (muestrario) de componente en pantalla
    parameters: {
        layout: 'centered'
    },
    //Para que en la documentación los tamaños salgan en formato radio y hacia el lado
    argTypes:{
        closeOuter: {
            control: 'boolean',
            description: 'Permite el cierre haciendo click desde fuera de la modal',
        },
        className: {
            control: 'text'
        },
        onHide: {
            control: 'none',
            description: 'Al cerrar la modal internamente, llamará al estado del padre para cerrar.',
        },
        show: {
            control: 'none',
            description: 'Recibe un boolean que puede ser gestionado desde un estado externo. (abre o cierra modal)',
        },
        defaultClose: {
            control: 'boolean',
            description: 'Recibe un boolean que gestiona la aparición del botón cerrar.',
        }
    },

} satisfies Meta<typeof Modal>;

export default meta;

//Ejemplo de componente con sus props específicas aplicadas
//Si no están presentes las props, se podrá editar en el inspector sin problemas.
export const BasicModal = ({ onHide, show, ...props }:ModalProps)=>{
    const [modalShow, setModalShow] = useState(false);
    return (
        <MainTheme theme={'dark'}>
            <Modal 
                show={modalShow}
                onHide={() => setModalShow(false)}
                className={"modal--md"}
                closeOuter={false}
                defaultClose
                {...props} 
            >
                <Container variant={'container-fluid'}>
                    <Row>
                        <Col className={'col justify-content-center'}>
                            <Heading variant={'h5'}>Hola mundo</Heading>
                            <Text>Acá va el contenido de la modal <strong>Strong</strong> <span>mi span</span> <em>Mi em</em></Text>
                            <div className="mt-4">
                                <Button onClick={() => setModalShow(false)}>Cerrar</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal>
    
            <Button onClick={()=> setModalShow(true)}>Open Modal</Button>
        </MainTheme>
    )
}


