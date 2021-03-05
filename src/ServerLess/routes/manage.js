import { scopes, error } from '~/ServerLess';




export const manage = {

    users:{
        async index({ user, after=null, hasRole=[2], limit=20 }){
            if(!user || user.rol>0) error("Se requiere ser administrador.");
            let query = scopes.users.where('rol', 'in', hasRole);
            if(after) query=query.startAfter(after.$doc);
            return query.limit(limit).get().then(snap=>snap.docs.map(e=>e.data()));
        },
    },

};