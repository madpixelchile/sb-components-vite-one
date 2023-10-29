
import { render } from '@testing-library/react'; //screen screen.debug();
import { Text } from './Text';
import MainTheme from '../ThemeProvider/MainTheme';

describe('Testing Texts', () => {

    test('Testing prop children and className', () => {

        const { getByText, container } = render(<MainTheme><Text className='h2'>Children</Text></MainTheme>);
        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('Children');

        const classProp = container.getElementsByClassName('h2');
        expect(classProp.length).toBe(1)

        expect(container).toMatchSnapshot();

    })

    test('Testing prop variant span', () => {
        const { container } = render(<MainTheme><Text variant={'span'}></Text></MainTheme>);
        expect(container.querySelector('div span')?.innerHTML).toBe('Texto de ejemplo');
    })

    test('Testing prop variant small', () => {
        const { container } = render(<MainTheme><Text variant={'small'}></Text></MainTheme>);
        expect(container.querySelector('div small')?.innerHTML).toBe('Texto de ejemplo');
    })

    test('Testing prop label without children', () => {
        const { container } = render(<MainTheme><Text variant={'em'} label={'Hola mundo'} ></Text></MainTheme>);
        expect(container.querySelector('div em')?.innerHTML).toBe('Hola mundo');
    })

    test('Testing prop without content', () => {
        const { container } = render(<MainTheme><Text variant={'strong'} ></Text></MainTheme>);
        expect(container.querySelector('div strong')?.innerHTML).toBe('Texto de ejemplo');
    })

    test('Testing prop variant p', () => {
        const { container } = render(<MainTheme><Text></Text></MainTheme>);
        expect(container.querySelector('div p')?.innerHTML).toBe('Texto de ejemplo');
    })

})