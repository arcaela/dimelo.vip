const middlewares = {
    guest:({ auth, redirect })=>(!auth || redirect('/test')),
    auth:({ auth, redirect })=>(auth || redirect('/signin')),
    user:({ auth, redirect })=>(auth && auth.role==='user' && redirect('/')),
    admin:({ auth, redirect })=>(auth && auth.role==='admin' && redirect('/')),
    leader:({ auth, redirect })=>(auth && auth.role==='leader' && redirect('/')),
};
export default middlewares;