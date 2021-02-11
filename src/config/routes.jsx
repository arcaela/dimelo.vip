const { Route } = require('@arcaela/aurora/hooks');
const { config } = require('../views/layout');
const { NaturePeople, PeopleAltOutlined } = require('@material-ui/icons');
Route.case = (cases, Component)=>cases.map(path=>Route(path, Component));


config.routes.push(
    {path:'/red',icon:PeopleAltOutlined,label:'Red'},
    {path:'/test',icon:NaturePeople,label:'Test de personalidad'},
);




Route('/signup', require('../views/Auth').default);
Route(['/', '/login'], require('../views/LoginPage/LoginPage').default);
Route('/test', require('../views/TestPage').default);
Route('/red', require('../views/RedPage/RedPage').default);
Route('/admin', require('../views/AdminPage').default);
Route('/admin/movimiento', require('../views/AdminPage/Movimiento').default);