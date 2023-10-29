

const fontConfig = {

    ['font-size-base']: '16px',
    ['font-family-base']: `'Roboto',sans-serif`,
    ['font-family-heading']: `'Roboto',sans-serif`,
    ['line-height-base']: '150%',
    ['line-height-heading']: '120%',
    ['line-height-initial']: 'initial',

    ['margin-bottom-heading']: '1.2rem;',

    ['font-size-text-1']: '28px',
    ['font-size-text-2']: '24px',
    ['font-size-text-3']: '20px',
    ['font-size-text-4']: '18px',
    ['font-size-text-5']: '16px',
    ['font-size-text-6']: '14px',
    ['font-size-text-7']: '12px',
    ['font-size-text-8']: '11px',

    ['font-size-headline-1']: '64px',
    ['font-size-headline-2']: '56px',
    ['font-size-headline-3']: '48px',
    ['font-size-headline-4']: '40px',
    ['font-size-headline-5']: '36px',
    ['font-size-headline-6']: '32px',

    ['font-size-subtitle-1']: ['font-size-headline-4'],
    ['font-size-subtitle-2']: ['font-size-headline-5'],
    ['font-size-subtitle-3']: ['font-size-headline-6'],
    ['font-size-subtitle-4']: ['font-size-text-1'],

    ['font-weight-regular']: 400,
    ['font-weight-medium']: 500,
    ['font-weight-bold']: 700,

}

const gutters = {
    ['gutter-small']: '8px',
    ['gutter-medium']: '10px',
    ['gutter-large']: '16px',
}

const breakpoints = {
    ['screen-sm']: '576px',
    ['screen-md']: '768px',
    ['screen-lg']: '992px',
    ['screen-xl']: '1200px',
    ['screen-xxl']: '1400px',
}

const colors = {
    primary: '#000000',
    secondary: '#6c757d',
    success: '#28a745',

    ['btn-primary']: '#eaeaea',
    ['btn-primary-hover']: '#444444',
    ['color-link']: '#ff44e0',
    ['color-span']: '#ff44e0',
    ['text-body']: '#FFFFFF',
    ['bg-color']: '#6b2981'
}

export const customTheme = {
    breakpoints: {
        ...breakpoints
    },
    gutters: {
        ...gutters
    },
    colors: {
        ...colors
    },
    fontConfig: {
        ...fontConfig
    }

}

export default customTheme;