# React + TypeScript + Vite 

Este paquete está desarrollado para testeo de github actions con semantic auto versioning & publish en NPM.

## Instalación de componentes en desarrollo

```   
yarn add madpixel-my-storybook-components
```

## Dependencias obligatorias del proyecto de destino

Solo debemos tener instalado (react >=16).

### Componentes en Storybook:
[Storybook components](https://651d88df917e7411d5ce6bdb-zvmytitobl.chromatic.com/?path=/docs/configure-your-project--docs)


### Uso del tema

Es importante envolver la aplicación en el HOC del tema, esto le añade estilos globales de reset y ajustes al html y body.
La prop "theme" es opcional, ya que por defecto vendrá el tema "light".

```   
    <MainTheme theme={'dark'}>  // dark - light
        <MyApp>
    </MainTheme>

```

### Personalizando el tema

Para personalizar los colores y configuraciones generales del tema, podremos incorporarle el objeto custom, respetando su estructura y reemplazar sus valores:

```

    export const fontConfig = {
    
        ['font-size-base']: '16px',
        ['font-family-base']: `'Roboto',sans-serif`,
        ['font-family-heading']: `'Obviously',sans-serif`,
        ['line-height-base']: '150%',
        ['line-height-heading']: '125%',
        ['line-height-initial']: 'initial',

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

    const customThemeColors = {
        colors: {
            ...colors
        },
        fontConfig:{
            ...fontConfig
        }
        
    }


    <MainTheme theme={customThemeColors}>
        <ComponentList/>
    </MainTheme>

```


### Uso de la grilla

El uso de la grilla va de acuerdo a bootstrap 4.0. 

```   
    <Container>
        <Row>
            <Col className={'col-md-6'}>
            </Col>
            <Col className={'col-md-6'}>
            </Col>
        </Row>
    </Container>

```

### Uso de headings

Por defecto serán etiquetas `<h1></h1>`, también podemos agregar tamaños referentes a otros headings, por ejemplo, podremos tener `<h1 size={'h6'}></h1>` (h1 con el tamaño de un h6).

```   
    <Heading variant={'h1'}>Esto es un título</Heading>
    <Heading variant={'h1'} size={'h2'}>Esto es un título</Heading>
    <Heading variant={'h1'} size={'h3'}>Esto es un título</Heading>
    <Heading variant={'h1'} size={'h4'}>Esto es un título</Heading>
    <Heading variant={'h1'} size={'h5'}>Esto es un título</Heading>
    <Heading variant={'h1'} size={'h6'}>Esto es un título</Heading>

```


### Uso de textos

Por defecto serán etiquetas `<p></p>`, también podemos agregar variantes de texto para generar etiquetas `<span></span>`,`<small></small>`,`<strong></strong>`,`<em></em>`, usando la prop variant `<Text variant={'span'}></Text>`.

Otra forma de usar etiquetas dentro de `<p><span>Hola mundo</span> <strong>Hola mundo</strong></p>`

```   
    <Text>Uso de textos</Text>

```


## ¿Cómo sobreescribir estilos?

Si bien podemos agregarle clases normales a los componentes, estas no lograrán sobreescribir los estilos, solo permitiran "agregarle nuevos" `<Text className={'nuevos-estilos'}></Text>`, por lo tanto, si por alguna razón necesitamos modificar los estilos del componente, debemos hacer lo siguiente:

```
const CustomClassText = styled(Text)`
    font-size: 40px;
`;

<Text>Hola mundo</Text>  ----> <CustomClassText>Hola mundo</CustomClassText>

```

Como resultado veremos que le agregará una nueva clase al componente en el output `<p class="sc-pNWRh czRlRI NUEVACLASEBZOL">Hola mundo</p>`