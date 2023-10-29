
import { render } from '@testing-library/react'; //screen screen.debug();
import { Heading } from './Heading';
import MainTheme from '../ThemeProvider/MainTheme';

describe('Testing <Heading/>', () => {

    test('Testing className & Children', () => {

        const { getByText, container } = render(<MainTheme><Heading className='h2'>Hola mundo</Heading></MainTheme>);
        const childrenElement = getByText('Hola mundo');
        expect(childrenElement.innerHTML).toBe('Hola mundo');

        const classProp = container.getElementsByClassName('h2');
        expect(classProp.length).toBe(1)

        expect(container).toMatchSnapshot();

    })

    test('Testing variant', () => {

        const { getByText, getByRole } = render(<MainTheme><Heading variant='h2'>Hola mundo</Heading></MainTheme>);
        const childrenElement = getByText('Hola mundo');
        expect(childrenElement.innerHTML).toBe('Hola mundo');

        expect(getByRole('heading',{level:2}).innerHTML).toBe('Hola mundo')

    })

    test('Testing label without children prop', () => {

        const { getByText, getByRole } = render(<MainTheme><Heading variant='h2' label={'Hola mundo'}></Heading></MainTheme>);
        const childrenElement = getByText('Hola mundo');
        expect(childrenElement.innerHTML).toBe('Hola mundo');

        expect(getByRole('heading',{level:2}).innerHTML).toBe('Hola mundo')

    })

})