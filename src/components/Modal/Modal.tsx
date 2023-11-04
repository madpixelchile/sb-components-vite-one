

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StyledModal } from './StyledModal';
import { AnyProp, ChildrenProp, ClassNameProp } from '../../types/types';

// const defaultProps = {
//     show: true,
//     defaultClose: true,
//     closeOuter: true
// };

export interface ModalProps extends
    ClassNameProp,
    ChildrenProp,
    AnyProp {
    onHide: (modalOne: boolean) => void;
    show: boolean;
    defaultClose?: boolean;
    closeOuter?: boolean;
}

export const Modal = ({
    className,
    children,
    show = true,
    defaultClose = true,
    onHide,
    closeOuter = true,
    ...props
}: ModalProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const [modalFadeIn, setModalFadeIn] = useState(false);

    const handleModalClose = () => {
        setModalFadeIn(false);
        let initModalFadeOut = setTimeout(() => {
            setCreateModal(false);
            setModalOpen(false);
            onHide(false);
            clearTimeout(initModalFadeOut);
        }, 500);
    }

    useEffect(() => {
        let initModalFadeIn: NodeJS.Timeout;
        let initModalFadeOut: NodeJS.Timeout;
        if (modalOpen || show) {
            setCreateModal(true);
            initModalFadeIn = setTimeout(() => {
                setModalFadeIn(true);
                clearTimeout(initModalFadeIn);
            }, 100);
        } else {
            setModalFadeIn(false);
            initModalFadeOut = setTimeout(() => {
                setCreateModal(false);
                clearTimeout(initModalFadeOut);
            }, 600);
        }
        return () => {
            clearTimeout(initModalFadeIn);
            clearTimeout(initModalFadeOut);
        }

    }, [modalOpen, show]);

    const modalBuild = () => {
        return (
            <StyledModal className={`modal ${modalFadeIn ? 'active' : ''} ${className ? className : ''}`} {...props}>
                <div className={'modal__box'}>
                    <div className={'modal__cont'}>
                        {
                            defaultClose &&
                            <div>
                                <button
                                    className={'modal__close-button'}
                                    type={'button'}
                                    onClick={handleModalClose}
                                >
                                    <span>
                                        <i className={'icon--close'}></i>
                                    </span>
                                </button>
                            </div>
                        }
                        {
                            children
                        }
                    </div>
                </div>
                {
                    closeOuter &&
                    <div
                        className={'modal__button-close-outer'}
                        onClick={handleModalClose}
                    ></div>
                }
            </StyledModal>
        )
    }

    const getBody = () => {
        const body = document.querySelector('body');
        const bodyHTML: HTMLElement = body as HTMLElement;
        return bodyHTML;
    }

    return (
        <>
            {
                createModal &&
                ReactDOM.createPortal(modalBuild(), getBody())
            }
        </>
    )
}


export default Modal;
