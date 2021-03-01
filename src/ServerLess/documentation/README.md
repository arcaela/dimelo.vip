# ServerLess

En este documento les explicaré un poco de la estructura del Back - Front(ServerLess)de la plataforma.## Importación
Para acceder a sus funciones o propiedas será necesario importar las de manera genérica o específica :
```javascript
    import { useAuth } from '~/ServerLess'
    import * as ServerLess from '~/ServerLess'
    import ServerLess, { useAuth } from '~/ServerLess'
```

## Helper | api
Esta función está mejor documentada en su propio [markdown](Api.md) dentro de este [directorio](./).



## Hook | useAuth ** useAuth ** es un hook construído para conocer el usuario autenticado actualmente,
su valor puede estar estar establecido en 2 etapas y 3 resultados :
```javascript
    export default function ProfileButton(props){
        const user = useAuth();
        const online = !!user;
        const loading = user === null;
        const offline = user === false;
        return (<React.Fragment>
            <Button></Button>
            <Card>
                (online && <CardTitle children={ user.fullname } />)
                (loading && <CircularProgress size={32} />)
            </Card>
        </React.Fragment>);
    }
```

## Hook | useInputs
Este hook en cuestión,
es un objeto cuyas propiedes han sido mutadas con useGetter,
sirve para acceder a los campos por defecto de un modelo de usuario,
es el mismo que se utiliza al momento de hacer el registro,
allí vamos guardando de manera temporal la información que enviarémos luego al servidor :
```javascript
    export default function MyForm(props){
        const { inputs } = useInputs();
        const enviar = ()=>fetch('/',{
            email:inputs.email,
        });
        
        return (<form onsubmit={ enviar }>
            <input onkeyup={ inputs.email=this.value } />
            <button type="submit" />
        </form>);
    }
```

## Helper | useGetter ** useGetter ** es una función que puede ser llamada dentro y fuera de un componente,
ella se encarga de convertir un objeto en una función pseudo accesible a sus propiedades,
les explicaré un poco más,
con un ejemplo :
```javascript
    const objeto = {
        a:1,
        b:2,
        c:{
            d:4,
            e:5,
        }
    };
    const getter = useGetter(objeto);
    getter.f = 17
    getter('g', 18)
    getter('g.h', 18)
    console.log( getter ); // {a:1,b:2,...}
    console.log( getter.a ); // 1
    console.log( getter.c ); // {d:4,...}
    console.log( getter.c.d ); // 4
    /*
        Es importante saber que estos objetos son mutados
        su valor se modifica con sus llaves,
        Hemos modificado "g" con un valor de 18,
        pero luego lo hemos reasignado como objeto.
    */
    console.log( getter('g') ); // {h:18}
    console.log( getter('g.h') ); // 18
```

## Helper | Google
Es un objeto con instancias de Google bajo necesidad, sirve para hacer consultas a la API de **Google** de manera asícrona,
teniendo en cuenta que se resuelven en promesas.
```javascript
    async function BuscarCiudad(ciudad){
        return Google.ready(google=>{
            return google.maps.places.getByPlaceId(ciudad);
        });
    }
```


## Helper | reference
Con esta función te ahorras tener que hacer una petición específica a **firestore** ya que solo debes pasar la ruta específica de la colección, documento e incluso del campo.
```javascript
const users = await reference('users').get();
const user = await reference(`users/${uid}`).get();
const name = await reference(`users/${uid}.fullname`).get();
```


## Throw | error
Función destinada a causar throws sin llamar instancias de Error para ello.
```javascript

    async function Buscar(){
        const user = await Promise.resolve({});
        // Antes
        if(!user.name)
            throw new Error("No tiene nombre");
        // Ahora
        if(!user.name)
            error("No tiene nombre");
    }
```
