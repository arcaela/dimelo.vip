const { Route } = require('@arcaela/aurora/hooks');
const { config } = require('../views/layout');
const { NaturePeople, PeopleAlt, PeopleAltOutlined, Message } = require('@material-ui/icons');




const isAdmin = ({ auth })=>(auth && auth.role==='admin');
config.routes.push(
    {path:'/news',icon:NaturePeople,label:'Noticias'},
    {path:'/admin',icon:PeopleAltOutlined,label:'Líderes de primer nivel', show:isAdmin},
    {path:'/admin/movimiento',icon:PeopleAlt,label:'Movimiento', show:isAdmin},
    {path:'/messages',icon:Message,label:'Mensajes', show:isAdmin},
    {path:'/test',icon:NaturePeople,label:'Test de personalidad'},
    {path:'/red',icon:NaturePeople,label:'Red'},
);

/* Auth */
Route('/signup', require('../views/Auth').default);
Route(['/', '/login'], require('../views/LoginPage/LoginPage').default);


/* Pages */
Route('/test', require('../views/TestPage').default);
Route('/admin', require('../views/AdminPage').default);
Route('/admin/movimiento', require('../views/AdminPage/Movimiento').default);
Route('/red', require('../views/RedPage').default);