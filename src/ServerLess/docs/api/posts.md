# [Documentación](./README.md)

## Publicaciones
> La ruta **posts/** está orientada a la consulta y manipulación de datos de las publicaciones.
<div style="margin-top:50px;" />

## PUT | Crear
> `api('posts/put', params)`
```javascript
    // @request
    const toCreate = {
        user:UserObject,
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
        user:UserObject,
    }
```
<div style="margin-top:50px;" />

## RECENTS | Listar Publicaciones
> `api('posts/recents', params)`
```javascript
    // @request
    const params = {
        after: Object || null, // Ultima publicación cargada
        user:UserObject,
    }
```
<div style="margin-top:50px;" />
