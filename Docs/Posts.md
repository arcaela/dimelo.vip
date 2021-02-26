# Documentación

Saludos muchachos, este es un documento con las especificaciones y estructura del código de la plataforma.


## Post | Snapshot
Para acceder a la propiedad de las Publicaciones debe realizarse una consulta específica a la colección de Publicaciones:
```javascript
    import Posts from '~/ServerLess/Collection/Posts'
    //                    o
    const Posts = require('~/ServerLess/Collection/Posts');
```

```javascript
const posts = await Posts.get();
posts.forEach(post=>{
    return post.data();
});

const post = await Posts.doc(id).get();
post.data();

{
    id: Firebase.Snapshot.id,
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
        // Rangos específicos del GPS,
        gps_area: Array | [ String, ...],
        // Perfiles psicológicos
        perfiles: Array | [ String, ...],
        // Roles de usuario
        rol: Array | [ Number, ...],
    },
}
```


## Posts | Helpers
Es importante aclarar que los helpers deben estar precedidos por un **$** lo cual indica que es un _helper_, no utilizar esa condición en algún campo que refiera a una propiedad de información de la publicación.
```javascript
{
    $delete() : Promise | [Autor | Role 0]
    $update(data : Object) : Promise | [Autor | Role 0]

    $liked() : Boolean
    $like(state : Boolean) : Promise | Boolean
    $likes() : Array [...Users]
}
```

