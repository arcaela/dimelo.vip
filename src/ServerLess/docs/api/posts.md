# [Documentación](./README.md)

## Publicaciones
> La ruta **posts/** está orientada a la consulta y manipulación de datos de las publicaciones.
<div style="margin-top:50px;" />

## PUT | Crear
> `api('posts/put', params)`
```javascript
    // @request
    const toCreate = {
        user: Object | User Object,
        title: String,
        content: String,
        media: [
            URL,(...)
        ],
        filters:{
            gps: Google GPS Range | Optional,
            patron: Array,
            rol: Array,
        },
    }
```
<div style="margin-top:50px;" />

## DELETE | Eliminar
> `api('posts/delete', params)`
```javascript
    // @request
    const params = {
        id: Number | Post ID,
        user: Object | User Object,
    }
```
<div style="margin-top:50px;" />

## RECENTS | Listar Publicaciones
> `api('posts/recents', params)`
```javascript
    // @request
    const params = {
        posts: [
            (...) // Ultimas publicaciones listadas
        ],
        user: Object | User Object,
    }
```
<div style="margin-top:50px;" />
