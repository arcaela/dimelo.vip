const middlewares = {
    guest:({ auth, redirect })=>(!auth || redirect('/test')),
    auth:({ auth, redirect })=>(auth || redirect('/signin')),
    user:({ auth, redirect })=>(auth&& auth.role===2 && redirect('/')),
    leader:({ auth, redirect })=>(auth&& auth.role===1 && redirect('/')),
    admin:({ auth, redirect })=>(auth && auth.role===0 && redirect('/')),
};
export default middlewares;