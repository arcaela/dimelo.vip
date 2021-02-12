const { Route } = require('@arcaela/aurora/hooks');
const { layout } = require('../views/layout');
const { NaturePeople, PeopleAlt, PeopleAltOutlined, Message } = require('@material-ui/icons');


layout.routes.push(
    {path:'/news',icon:NaturePeople,label:'Noticias'},
    {path:'/messages',icon:Message,label:'Mensajes', show({auth}){ return auth && auth.role=='admin'; }},
    {path:'/admin',icon:PeopleAltOutlined,label:'Líderes de primer nivel', show({auth}){return auth && auth.role=='admin';}},
    {path:'/admin/movimiento',icon:PeopleAlt,label:'Movimiento', show({auth}){return auth && auth.role!='user';}},
    {path:'/test',icon:NaturePeople,label:'Test de personalidad'},
);

/* Auth */
Route('/signup', require('../views/SignUpPage').default);
Route(['/', '/login'], require('../views/SignInPage').default);

/* Pages */
Route('/test', require('../views/TestPage').default);
Route('/admin', require('../views/AdminPage').default);
Route('/admin/movimiento', require('../views/AdminPage/Movimiento').default);