# React + TypeScript + Vite 

Este paquete está desarrollado para testeo de github actions con semantic auto versioning & publish en NPM.

## Instalación de componentes en desarrollo

```   
yarn add madpixel-my-storybook-components
```


### Componentes en Storybook:
[Storybook components](https://madpixelchile.github.io/sb-components-vite-one/?path=/docs/ui-labels-mylabel--docs)


### Uso del tema

Es importante envolver la aplicación en el HOC del tema, esto le añade estilos globales de reset y ajustes al html y body.

```   
    <MainTheme>
        <MyApp>
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