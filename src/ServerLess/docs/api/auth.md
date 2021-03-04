# [Documentación](./README.md)

Saludos muchachos, este es un documento con las especificaciones y estructura del código de la plataforma.


## Api | Function
La función de api es la unión de distintas funciones que interpretan rutas locales, estas funciones pueden ser modificadas en el archivo de rutas.
```javascript
// '~/ServerLess/routes'
{
    auth:{
        validate(email) : Boolean
    },
    posts:{
        index() : Promise
        create( post : Object ) : Promise
    }
}
```
