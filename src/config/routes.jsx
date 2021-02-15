const { Route } = require('@arcaela/aurora/hooks');
const { NaturePeople, PeopleAlt, PeopleAltOutlined, Message } = require('@material-ui/icons');

require('~/views/layout').layout.routes.push(
    {path:'/news',icon:NaturePeople,label:'Noticias'},
    {path:'/messages',icon:Message,label:'Mensajes', show({auth}){ return auth && auth.role==='admin'; }},
    {path:'/admin',icon:PeopleAltOutlined,label:'Líderes de primer nivel', show({auth}){return auth && auth.role==='admin';}},
    {path:'/admin/movimiento',icon:PeopleAlt,label:'Movimiento', show({auth}){return auth && auth.role!=='user';}},
    {path:'/test',icon:NaturePeople,label:'Test de personalidad'},
    {path:'/red',icon:NaturePeople,label:'Red'},
);

/* Auth */
Route('/login', require('~/views/SignIn').default);
Route(['/', '/signup'], require('~/views/SignUp').default);

/* Pages */
Route('/test', require('~/views/Test').default);
Route('/admin', require('~/views/Admin').default);
Route('/admin/movimiento', require('~/views/Admin/Movimiento').default);
Route('/red', require('~/views/Red').default);