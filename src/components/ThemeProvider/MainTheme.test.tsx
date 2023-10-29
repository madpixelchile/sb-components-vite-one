
import { render } from '@testing-library/react'; //screen screen.debug();
import MainTheme from './MainTheme';
import customTheme from './MainThemeMocks';

describe('Testing <MainTheme>', () => {

    test('Testing default theme & Prop Children', () => {
        const { getByText } = render(<MainTheme>Children</MainTheme>);
        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('Children');
    })

    test('Testing dark mode', () => {
        render(<MainTheme theme={'dark'}></MainTheme>);
    })

    test('Testing custom theme', () => {
        render(<MainTheme theme={customTheme}>Children</MainTheme>);
    })

    test('Testing custom theme when object is empty', () => {
        render(<MainTheme theme={{}}>Children</MainTheme>);
    })


})