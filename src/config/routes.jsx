const { Route } = require('@arcaela/aurora/hooks');
const { config } = require('../views/layout');
const { NaturePeople } = require('@material-ui/icons');





config.routes.push(
    {path:'/test',icon:NaturePeople,label:'Test de personalidad'},
);

/* Auth */
Route('/signup', require('../views/Auth').default);
Route(['/', '/login'], require('../views/LoginPage/LoginPage').default);


/* Pages */
Route('/test', require('../views/TestPage').default);
Route('/admin', require('../views/AdminPage').default);
Route('/admin/movimiento', require('../views/AdminPage/Movimiento').default);