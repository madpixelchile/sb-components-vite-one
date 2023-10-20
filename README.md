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