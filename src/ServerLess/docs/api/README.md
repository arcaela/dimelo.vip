# [Documentación](../README.md)

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

Un ejemplo para llamar una ruta de api sería el siguiente procedimiento:
```javascript
import { api } from '~/ServerLess'
// const { api } = require('~/ServerLess');

const existEmail = api('auth/validate','me@alsome.again')
    .then(valid=> Boolean)

const posts = api('posts') // Igual que [posts.index]
    .then( posts => Array)

const posted = api('posts/create', post : Object)
    .then( post => Object)

```


<div style="margin-top:50px;" />

# <summary>Rutas disponibles</summary>

- **[auth/](./auth.md)**
- **[posts/](./posts.md)**