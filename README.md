# React + TypeScript + Vite 

Este paquete está desarrollado para testeo de github actions con semantic auto versioning & publish en NPM.

## Instalación de componentes en desarrollo

```   
yarn add madpixel-my-storybook-components
```

## Dependencias obligatorias del proyecto de destino

Solo debemos tener instalado (react >=16)

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