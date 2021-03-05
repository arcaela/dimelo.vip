# [Documentación](../README.md)


## User | [ScopeBase](./README.md)

Los usuarios se pueden buscar en su colección referente, la consulta la haces directamente a un **scope**.

```javascript
    import { scopes } from '~/ServerLess'
    const { scopes } = require('~/ServerLess');

    const docs = await scopes.users.where(fieldName, '==', fieldValue).get();
    const snap = await scopes.users.doc(id).get();
    
    docs[0].data();
    snap.data();

    const results = {
        uid: String,
        rol: Number,
        locked: Boolean,
        leader: String | User UID,
        fullname: String,
        email: String,
        cedula: Number,
        birthday: Date String | 'dd/MM/yyy',
        movil: Number,
        phone: Number,
        socials: Object,
        address:{
            string: String,
            maps: Object,
        },
        family:{
            adults: Number,
            partners: Number,
        },
        voting:{
            departament: String,
            municipality: String,
            point: String,
            table: Number,
        },
        followers:{
            size: Number,
        },
    }
```


## Helpers | [ScopeBase](./README.md)
Es importante aclarar que los helpers deben estar precedidos por un **$** lo cual indica que es un _helper_, no utilizar esa condición en algún campo que refiera a una propiedad de información del usuario.
Estos helpers ya están incorporados en el objeto obtenido.
Su documentación la puedes leer [aquí](./README.md)