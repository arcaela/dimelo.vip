# Documentación

Saludos muchachos, este es un documento con las especificaciones y estructura del código de la plataforma.


## User | Snapshot
Para acceder a la propiedad de los usuarios debe realizarse una consulta específica a la colección de usuarios:
```javascript
    import { Users } from '~/ServerLess'
    import Users from '~/ServerLess/collections/Users'
```

```javascript
const docs = await Users.where('uid', '==', uidValue).get();
const snap = await Users.doc(uid).get();
docs[0].data();
snap.data();

{
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


## Helpers
Es importante aclarar que los helpers deben estar precedidos por un **$** lo cual indica que es un _helper_, no utilizar esa condición en algún campo que refiera a una propiedad de información del usuario.
Estos helpers ya están incorporados en el objeto obtenido.
```javascript
{
    $has(path : String) : Boolean // has('address.gps.lat')
    $update(data : Object) : Promise
    $posts() : Array | Posts
    $followers() : Array | Users
    $invite(emails : Array | [String, ...]) : Promise
}
```

