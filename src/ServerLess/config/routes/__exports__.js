const { merge } = require('lodash');
const pathToRegex = require('path-to-regex');

const routes = ([
    require('./auth'),
    require('./posts'),
]).reduce((_, _mod)=>merge(_, {..._mod}),{});


const resolve = (function _(_ob_, prefix=''){
    return Object.entries(_ob_).reduce((paths, [path, callback])=>(
        typeof callback==='object'?{...paths, ..._(callback, path)}
        :(paths[path=(`${prefix}/${path}`).replace(/\/+/gi,'/').replace(/^\/?(.*)(\/)?/gi,"$1").toLocaleLowerCase()]={
            path,
            callback,
            regExp:new pathToRegex(path),
        },paths)
    ),{});
})(routes);
export default resolve;