# Documentación

Saludos muchachos, este es un documento con las especificaciones y estructura del código de la plataforma.


## User | Snapshot
Para acceder a la propiedad de los usuarios debe realizarse una consulta específica a la colección de usuarios:
```javascript
    import Users from '~/ServerLess/Collection/Users'
    //                    o
    const Users = require('~/ServerLess/Collection/Users');
```

```javascript
const users = await Users.where(fieldName, '==', fieldValue).get();
users.forEach(user=>{
    return user.data();
});

const user = await Users.doc(uid).get();
user.data();

{
    uid: Firebase.Auth.User.uid,
    rol: Number,
    locked: Boolean,
    fullname: String,
    photoURL: String | URL,
    birthday: Date String,
    dni: Number,
    address:{
        string: String,
        coords:{
            lat: Number,
            lng: Number,
        },
    },
    phone: Number,
    movil: Number,
    leader: Number | Existe en Users,
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
}
```


## User | Helpers
Es importante aclarar que los helpers deben estar precedidos por un **$** lo cual indica que es un _helper_, no utilizar esa condición en algún campo que refiera a una propiedad de información del usuario.
```javascript
{
    $has(path : String) : Boolean // has('address.gps.lat')
    $update(data : Object) : Promise
    $posts() : Array | Posts
    $followers() : Array | Users
    $invite(emails : Array | [String, ...]) : Promise
}
```

