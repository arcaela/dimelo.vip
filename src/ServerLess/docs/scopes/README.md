# [Documentación](../README.md)

## ScopeBase | SnapshotBase
La clase **ScopeBase** es un extensor de API para permitir la interacción de las colecciones directamente desde un objeto sin mapeo.

Los **scopes** ya construídos los pueden ver en su documentación específica.
```javascript
    import { scopes } from '~/ServerLess'
    //                    o
    const { scopes } = require('~/ServerLess');
```


```javascript
const post = await scopes.posts.doc(id).get();
const posts = await scopes.posts.where(fieldName, '==', fieldValue).get();

const user = await scopes.users.doc(id).get();
const users = await scopes.users.where(fieldName, '==', fieldValue).get();


// Se retornan las propiedades del Objeto indicado sumando los siguientes $helpers
{
    $has(path: String 'key.subkey'): any
    $get(path: String 'key.subkey'): any
    $set(path: String 'key.subkey', value: any): value

    toJSON(): Object | SnapshotObject
    $save(): Promise
    $delete(): Promise
    $update(props: Object, save: Boolean): Promise
}
```