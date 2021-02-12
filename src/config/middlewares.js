const middlewares = {
    auth:({ auth, redirect })=>auth || redirect('/login'),
    guest:({ auth, redirect })=>!auth || redirect('/test'),
};
export default middlewares;