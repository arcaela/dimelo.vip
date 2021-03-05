# [Documentación](./README.md)

## Accounts
> La ruta **auth/** está orientada a la consulta y manipulación de datos de los usuarios.
<div style="margin-top:50px;" />

## SignUp | Registrarse
> `api('auth/signup', params)`
```javascript
    // @request
    const params = {
        cedula: Number,
        fullname: String,
        birthday: Date String,
        movil: Number,
        phone: Number | Optional,
        email: String,
        password: any,
        address:{
            string: String,
            maps: String | Optional,
        },
        voting:{
            departament: String,
            municipality: String,
            point: String,
            table: Number,
        },
        leader: String | User UID,
        family:{
            adults: Number,
            partners: Number,
        },
    }
```
<div style="margin-top:50px;" />

## SignIn | Conectarse
> `api('auth/signin', params)`
```javascript
    // @request
    const params = {
        email: String,
        password: any,
    }
```
<div style="margin-top:50px;" />

## SignOut | Desconectarse
> `api('auth/signout', callback)`
```javascript
    // @request
    const callback = ()=>{
        return window.location.href = '/home';
    };
```
<div style="margin-top:50px;" />


## update | Actualizar
> `api('auth/update', props)`
```javascript
    // @request
    const props = {
        // Todas las propiedades que serán reemplazadas
        // en el objeto de usuario, teniendo en cuenta que
        // para la imagen de perfil debe enviarse un Blob
        // o una instancia de ( new File ) para su actualización.
        password: any,
        picture: Blob | File | Base64,
        (...),
    };
```
> Las modificaciones con esta ruta son recursivas,
> esto quiere decir que los campos que sean tipo `Object` serán mapeados
> y reemplazados desde adentro.
```javascript
    const before = {
        address:{
            string:"Colombia",
            maps:null,
        },
    }
    const props = {
        address:{
            maps:123
        },
    };
    const after = {
        address:{
            string: "Colombia",
            maps: 123,
        }
    };
```
<div style="margin-top:50px;" />