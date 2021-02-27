const { Route } = require('@arcaela/aurora/hooks');
const { NaturePeople, Message, Announcement } = require('@material-ui/icons');
const UsersIcon = require('~/images/svg/users.svg').default;
const MovementIcon = require('~/images/svg/users-friends.svg').default;

require('~/views/layout').layout.routes.push(
    {
        path:'/posts',
        icon:Announcement,
        label:'Noticias'
    },
    {
        path:'/messages',
        icon:Message,
        label:'Mensajes', 
        show({auth}){ return false && auth && auth.rol===0 }
    },
    {
        path:'/admin/movimiento',
        icon:MovementIcon,
        label:'Movimiento', 
        show({auth}){ return auth && auth.rol===0 }
    },
    {
        path:'/admin/news',
        icon:Announcement,
        label:'Panel de Noticias',
        show({auth}){ return auth && auth.rol===0 }
    },
    {
        path:'/red',
        icon:UsersIcon,
        label:'Red'
    },
    {
        path:'/test',
        icon:NaturePeople,
        label:'Test de personalidad'
    },
);

/* Auth */
Route('/').redirect('/signup');
Route('/signin', require('~/views/SignIn').default);
Route('/signup/:code(.*)?', require('~/views/SignUp').default);

/* Pages */
Route('/posts', require('~/views/Posts').default);
Route('/red', require('~/views/Red').default);
Route('/test', require('~/views/Test').default);
Route('/admin/:slug(.*)?', require('~/views/Admin').default);
Route('/account', require('~/views/Profile').default);