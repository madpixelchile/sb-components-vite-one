
import { screen, render } from '@testing-library/react'; //screen
import { Container } from './Container';
import MainTheme from '../ThemeProvider/MainTheme';

describe('Testing Containers', () => {

  it('Testing props', () => {

    const { getByText, container } = render(<MainTheme><Container className='container-fluid'>Children</Container></MainTheme>);
    const childrenElement = getByText('Children');
    expect(childrenElement.innerHTML).toBe('Children');

    const classProp = container.getElementsByClassName('container-fluid');
    expect(classProp.length).toBe(1)

    expect(container).toMatchSnapshot();

  })

  it('Testing classname container', () => {

    const { container } = render(<MainTheme><Container>Children</Container></MainTheme>);

    const classProp = container.getElementsByClassName('container');
    expect(classProp.length).toBe(1)

  })

  it('Testing extra props', () => {
    const { getByLabelText } = render(<MainTheme><Container aria-label={'extra-prop'}>Children</Container></MainTheme>);
    const ariaElement = getByLabelText('extra-prop');
    expect(ariaElement).toBeTruthy()
    screen.debug()
  })


})