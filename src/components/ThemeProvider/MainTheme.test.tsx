
import { render, screen } from '@testing-library/react'; //screen screen.debug();
import MainTheme from './MainTheme';
import customTheme from './MainThemeMocks';

describe('Testing <MainTheme>', () => {

    test('Testing default theme & Prop Children', () => {
        const { getByText } = render(<MainTheme testMode>Children</MainTheme>);
        const childrenElement = getByText('Children');
        expect(childrenElement.innerHTML).toBe('<span aria-label="theme-provider-theme">light</span>Children');

        const themeMode = screen.getByLabelText('theme-provider-theme');
        expect(themeMode.innerHTML).toBe('light');

    })

    test('Testing dark mode', () => {
        render(<MainTheme theme={'dark'} testMode></MainTheme>);
        const themeMode = screen.getByLabelText('theme-provider-theme');
        expect(themeMode.innerHTML).toBe('dark');
    })

    test('Testing custom theme', () => {
        render(<MainTheme theme={customTheme} testMode>Children</MainTheme>);
        const themeMode = screen.getByLabelText('theme-provider-theme');
        expect(themeMode.innerHTML).toBe('custom-theme-loaded');
    })

    test('Testing custom theme when object is empty', () => {
        render(<MainTheme theme={{}} testMode>Children</MainTheme>);
        const themeMode = screen.getByLabelText('theme-provider-theme');
        expect(themeMode.innerHTML).toBe('light');

    })


})