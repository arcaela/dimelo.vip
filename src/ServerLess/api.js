import _routes from './routes';
import { get } from 'lodash';
import pathToRegex from 'path-to-regex';

export const routes = (function _(_ob_, prefix=''){
    return Object.entries(_ob_).reduce((paths, [path, callback])=>(
        typeof callback==='object'?{...paths, ..._(callback, path)}
        :(paths[path=(`${prefix}/${path}`).replace(/\/+/gi,'/').replace(/^\/?(.*)(\/)?/gi,"$1").toLocaleLowerCase()]={
            path,
            callback,
            regExp:new pathToRegex(path),
        },paths)
    ),{});
})(_routes);
const routeValues = Object.values(routes);

export default async function api(path, ...props){
    path = path.replace(/(\/|\.)+/gi,'/').replace(/^(\.|\/)?(.*)(\.|\/)+?$/gi, "$2").toLowerCase();
    const route = routeValues.reduce((_ob_, route)=>{
        if(_ob_) return _ob_;
        const params = route.regExp.match(path);
        return !params?_ob_:{...route,props:([params, ...props].slice(route.regExp.keys.length?0:1)),};
    },null) || get(routes, `${path}/index`, {props:[],callback:()=>Promise.reject({code:404,message:'NOT_FOUND'})});
    return route.callback(...route.props);
}