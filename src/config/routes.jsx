const { Route } = require('@arcaela/aurora/hooks');
const { NaturePeople, PeopleAltOutlined, Message, Announcement } = require('@material-ui/icons');
const UsersIcon = require('~/images/svg/users.svg').default;
const MovementIcon = require('~/images/svg/users-friends.svg').default;

require('~/views/layout').layout.routes.push(
    {path:'/posts',icon:Announcement,label:'Noticias'},

    {path:'/messages',icon:Message,label:'Mensajes', show({auth}){ return auth && auth.role===0; }},
    {path:'/admin',icon:PeopleAltOutlined,label:'Líderes de primer nivel', show({auth}){return auth && auth.role===0;}},
    {path:'/admin/movimiento',icon:MovementIcon,label:'Movimiento', show({auth}){return auth && auth.role!=='user';}},

    {path:'/test',icon:NaturePeople,label:'Test de personalidad'},
    {path:'/red',icon:UsersIcon,label:'Red'},
);

/* Auth */
Route('/').redirect('/signup');
Route('/signin', require('~/views/SignIn').default);
Route('/signup/:referer(.*)?', require('~/views/SignUp').default);

/* Pages */
Route('/posts', require('~/views/Posts').default);
Route('/red', require('~/views/Red').default);
Route('/test', require('~/views/Test').default);
Route('/admin/:slug(.*)?', require('~/views/Admin').default);
// admin/noticias/edit/4arwetesdrt