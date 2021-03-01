import { get } from 'lodash';
import routes from '../config/routes/__exports__';



const routeValues = Object.values(routes);
export default async function api(path, ...props){
    path = path.replace(/(\/|\.)+/gi,'/').replace(/^(\.|\/)?(.*)(\.|\/)+?$/gi, "$2").toLowerCase();
    const route = routeValues.find(_route=>{
        const params = _route.regExp.match(path);
        return params && {
            ..._route,
            props:([params, ...props].slice(_route.regExp.keys.length?0:1)),
        };
    }) || get(routes, `${path}/index`, {props:[],callback:()=>Promise.reject({code:404,message:'NOT_FOUND'})});
    return route.callback(...route.props);
}