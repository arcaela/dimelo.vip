const middlewares = {
    guest:({ auth, redirect })=>(!auth || redirect('/test')),
    auth:({ auth, redirect })=>(auth || redirect('/signin')),
    user:({ auth, redirect })=>(auth&& auth.rol === 2 && redirect('/')),
    leader:({ auth, redirect })=>(auth&& auth.rol === 1 && redirect('/')),
    admin:({ auth, redirect })=>(auth && auth.rol === 0 && redirect('/')),
};
export default middlewares;