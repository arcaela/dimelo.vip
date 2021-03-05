# [Documentación](./README.md)

## Administrador
> La ruta **manage/** está orientada a la consulta y manipulación de datos de `todos` los usuarios.
<div style="margin-top:50px;" />

## USERS | Listar Usuarios
> `api('manage/users', params)`
```javascript
    // @request
    const params = {
        user: Object, // Current Auth User
        hasRole:Array || [2], // Users roles filtering
        after: Object || null, // The last user returned
        limit: Number || 20, // Number of items per page
    }
```
<div style="margin-top:50px;" />