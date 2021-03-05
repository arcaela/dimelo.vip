# Documentación

Saludos muchachos, este es un documento con las especificaciones y estructura del código de la plataforma.


## Post | [ScopeBase](./README.md)

Las publicaciones se pueden buscar en su colección referente, la consulta la haces directamente a un **scope**.

```javascript
    import { scopes } from '~/ServerLess'
    const { scopes } = require('~/ServerLess');

    const docs = await scopes.posts.where(fieldName, '==', fieldValue).get();
    const snap = await scopes.posts.doc(id).get();
    
    docs[0].data();
    snap.data();

    const result = {
        id: Number,
        autor:{
            uid: String,
            fullname: String,
        },
        title: String,
        content: String,
        media: {
            pictures: Array,
            videos: Array,
        },
        filters:{
            gps_area: Array | [ String, ...],
            perfiles: Array | [ String, ...],
            rol: Array | [ Number, ...],
        },
    }
```


## Helpers | [ScopeBase](./README.md)
Es importante aclarar que los helpers deben estar precedidos por un **$** lo cual indica que es un _helper_, no utilizar esa condición en algún campo que refiera a una propiedad de información del usuario.
Estos helpers ya están incorporados en el objeto obtenido.
Su documentación la puedes leer [aquí](./README.md)