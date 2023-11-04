
import { fireEvent, render, screen } from '@testing-library/react'; //screen screen.debug();
import { Modal } from './Modal';
import MainTheme from '../ThemeProvider/MainTheme';

describe('Testing Modals', () => {

    test('Testing className & Children', () => {

        const { container, getByText } = render(
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

        const modalElement = container.querySelector('[aria-label="modal-test"]');
        if(modalElement){
            const classProp = modalElement.getElementsByClassName('modal--md');
            expect(classProp.length).toBe(1)
        }

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


    test('Testing Modal close', () => {

        const { getByText, getByLabelText } = render(
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

        screen.debug();

        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('<div><button class="modal__close-button" type="button"><span><i class="icon--close"></i></span></button></div>Children');

        const modalElement = getByLabelText('modal-test');

        if(modalElement){
            const classProp = modalElement.getElementsByClassName('modal__close-button');
            const buttonClose = classProp[0];
            fireEvent.click(buttonClose)
        }

        screen.debug();

    })

})