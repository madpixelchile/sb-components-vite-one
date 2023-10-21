

export const colors = {
    primary: '#000000',
    secondary: '#6c757d',
    success: '#28a745',

    ['btn-primary']: '#eaeaea',
    ['btn-primary-hover']: '#444444',
    ['color-link']: '#007bff'
}

export const lightModeColors = {
    ...colors,
    ['text-body']: '#222222',
    ['bg-color']: '#FFFFFF'
}

export const darkModeColors = {
    ...colors,
    ['text-body']: '#FFFFFF',
    ['bg-color']: '#333333'
}

export default colors;