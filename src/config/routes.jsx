const { Route } = require('@arcaela/aurora/hooks');
const { config } = require('../views/layout');

const { ChromeReaderMode, NaturePeople, PeopleAltOutlined } = require('@material-ui/icons');
const Auth = require('../views/Auth').default;
Route.case = (cases, Component)=>cases.map(path=>Route(path, Component));

config.routes.push(
    {path:'/news',icon:ChromeReaderMode,label:'Noticias'},
    {path:'/red',icon:PeopleAltOutlined,label:'Red'},
    {path:'/test',icon:NaturePeople,label:'Test de personalidad'},
);

/* Auth */
Route('/login', require('~/views/SignIn').default);
Route(['/', '/signup'], require('~/views/SignUp').default);

/* Pages */
Route('/news', require('~/views/News').default);
Route('/test', require('~/views/Test').default);

Route('/admin/:slug(.*)?', require('~/views/Admin').default);


//Route('/admin/movimiento', require('~/views/Admin/Movimiento').default);
//Route('/admin/noticias/add', require('~/views/Admin/News/AddNews').default);
Route('/red', require('~/views/Red').default);
