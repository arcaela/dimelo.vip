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

Route('/', Auth);
Route('/signup', Auth);
Route('/login', require('../views/LoginPage/LoginPage').default);
Route('/news', require('../views/NewsPage').default);
Route('/test', require('../views/TestPage').default);
Route('/red', require('../views/RedPage/RedPage').default);


Route('/admin', require('../views/AdminPage').default);
Route('/admin/movimiento', require('../views/AdminPage/Movimiento').default);