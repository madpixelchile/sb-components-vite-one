
import { render } from '@testing-library/react'; //screen screen.debug();
import { Button } from './Button';
import MainTheme from '../ThemeProvider/MainTheme';

describe('Testing Buttons', () => {

    test('Testing className & children', () => {

        const { getByText, container } = render(<MainTheme theme={'dark'}><Button className='custom-class'>Children</Button></MainTheme>);
        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('Children');

        const classProp = container.getElementsByClassName('custom-class');
        expect(classProp.length).toBe(1)

        expect(container).toMatchSnapshot();

    })

    test('Testing variants link', () => {

        const { container } = render(<MainTheme theme={MainTheme}><Button variant={'link'} ></Button></MainTheme>);
        const classProp = container.getElementsByClassName('as-link');
        expect(classProp.length).toBe(1)

    })

    test('Testing variants outlined', () => {

        const { container } = render(<MainTheme theme={{}}><Button variant={'outlined'} ></Button></MainTheme>);
        const classProp = container.getElementsByClassName('outlined');
        expect(classProp.length).toBe(1)

    })

})