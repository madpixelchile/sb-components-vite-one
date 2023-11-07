
import { fireEvent, render, screen, waitFor } from '@testing-library/react'; //screen screen.debug();
import { Modal } from './Modal';
import MainTheme from '../ThemeProvider/MainTheme';

describe('Testing Modals', () => {

    test('Testing Children', () => {


        const { getByText } = render(
        <MainTheme>
            <Modal
                show={true}
                onHide={()=> true}
                className={"modal--md"}
                closeOuter={true}
                defaultClose
                aria-label={'modal-test'}
            >Children</Modal>
        </MainTheme>
        );

        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('<div><button class="modal__close-button" type="button"><span><i class="icon--close"></i></span></button></div>Children');

    })

    test('Testing close outer', async() => {

        const onHideMock = jest.fn();

        const { getByLabelText,  } = render(
        <MainTheme>
            <Modal
                show={true}
                onHide={()=> onHideMock()}
                className={"modal--md"}
                closeOuter={true}
                defaultClose
                aria-label={'modal-test'}
            >Children</Modal>
        </MainTheme>
        );

        const modalElement = getByLabelText('modal-test');

        if(modalElement){
            expect(modalElement.className).toContain('modal--md');

            const closeOuterElement = modalElement.getElementsByClassName('modal__button-close-outer');
            const buttonClose = closeOuterElement[0];

            fireEvent.click(buttonClose);
            await waitFor(() => {
                expect(onHideMock).toHaveBeenCalled();
            });

        }

        screen.debug();

    })

    test('Testing defaultClose false & without closeOuter structure', () => {

        const { container, getByText } = render(
        <MainTheme>
            <Modal
                show={true}
                onHide={()=> true}
                closeOuter={false}
                defaultClose={false}
                aria-label={'modal-test'}
            >Children</Modal>
        </MainTheme>
        );

        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('Children');

        const modalElement = container.querySelector('[aria-label="modal-test"]');
        if(modalElement){
            const classProp = modalElement.getElementsByClassName('modal__button-close-outer');
            expect(classProp.length).toBe(0)
        }

        const modalElementTwo = container.querySelector('[aria-label="modal-test"]');
        if(modalElementTwo){
            const classProp = modalElementTwo.getElementsByClassName('modal__close-button');
            expect(classProp.length).toBe(0)
        }

    })


    test('Testing Modal close', async() => {

        jest.clearAllMocks();

        const onHideMock = jest.fn();

        const { getByText, getByLabelText } = render(
        <MainTheme>
            <Modal
                show={true}
                onHide={()=> onHideMock()}
                className={"modal--md"}
                closeOuter={true}
                defaultClose
                aria-label={'modal-test'}
            >Children</Modal>
        </MainTheme>
        );

        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('<div><button class="modal__close-button" type="button"><span><i class="icon--close"></i></span></button></div>Children');

        const modalElement = getByLabelText('modal-test');

        if(modalElement){
            const classProp = modalElement.getElementsByClassName('modal__close-button');
            const buttonClose = classProp[0];
            fireEvent.click(buttonClose);

            await waitFor(() => {
                expect(onHideMock).toHaveBeenCalled();
            });

        }

    })


    test('Testing Modal start in close mode', async() => {

        const { queryByLabelText } = render(
        <MainTheme>
            <Modal
                show={false}
                onHide={()=> false}
                className={"modal--md"}
                closeOuter={true}
                defaultClose
                aria-label={'modal-test'}
            >Children</Modal>
        </MainTheme>
        );

        const modalElement = queryByLabelText('modal-test');
        expect(modalElement).toBeNull();

    })

})