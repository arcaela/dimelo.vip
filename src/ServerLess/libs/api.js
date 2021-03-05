import { merge, get } from 'lodash';
import pathToRegex from 'path-to-regex';
const routes = (function reduce(props, prefix=''){
    if(Array.isArray(props)) return reduce(merge(...props));
    return Object.entries(props).reduce((paths, [ path, callback ])=>{
        if(typeof callback==='object') return {...paths, ...reduce(callback, `${prefix}/${path}`)};
        path=(`${prefix}/${path}`).replace(/\/+/gi,'/').replace(/^\/?(.*)(\/)?/gi,"$1").toLocaleLowerCase();
        return {
            ...paths,
            [path]:{
                path,
                callback,
                regExp: new pathToRegex(path),
            }
        }
    },{});
})([
    require('~/ServerLess/routes/auth'),
    require('~/ServerLess/routes/posts'),
])

const values = Object.values(routes);
export default function api(path, ...props){
    let params = null;
    path = path.replace(/(\/|\.)+/gi,'/').replace(/^(\.|\/)?(.*)(\.|\/)+?$/gi, "$2").toLowerCase();
    const route = values.find(_route=>{
        params = _route.regExp.match(path) || params;
        if(params) props=([params,...props]).slice(_route.regExp.keys.length?0:1);
        return !!params;
    }) || get(routes, `${path}/index`, {props,callback:()=>Promise.reject({code:404,message:'ROUTE_NOT_FOUND'})});
    return route.callback(...props);
}
