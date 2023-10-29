
import { render } from '@testing-library/react'; //screen screen.debug();
import { Col } from './Col';
import MainTheme from '../ThemeProvider/MainTheme';

describe('Testing Cols', () => {

    it('Testing props', () => {

        const { getByText, container } = render(<MainTheme><Col className='flex-column'>Children</Col></MainTheme>);
        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('Children');

        const classProp = container.getElementsByClassName('flex-column');
        expect(classProp.length).toBe(1)

        expect(container).toMatchSnapshot();

    })

})