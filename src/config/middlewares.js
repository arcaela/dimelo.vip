const middlewares = {
    guest:({ auth, redirect })=>(!auth || redirect('/test')),
    auth:({ auth, redirect })=>(auth || redirect('/signin')),
    user:({ auth, redirect })=>(auth&& auth.isUser() && redirect('/')),
    leader:({ auth, redirect })=>(auth&& auth.isLeader() && redirect('/')),
    admin:({ auth, redirect })=>(auth && auth.isAdmin() && redirect('/')),
};
export default middlewares;