
import { render } from '@testing-library/react'; //screen
import { Row } from './Row';
import MainTheme from '../ThemeProvider/MainTheme';

describe('Testing Rows', () => {

    it('Testing props', () => {

        const { getByText, container } = render(<MainTheme><Row className='no-gutters'>Children</Row></MainTheme>);
        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('Children');

        const classProp = container.getElementsByClassName('no-gutters');
        expect(classProp.length).toBe(1)

        // screen.debug();

        expect(container).toMatchSnapshot();

    })

})