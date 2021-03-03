import ScopeBase from '~/ServerLess/scopes/ScopeBase'




export default class User extends ScopeBase {
    constructor(options){ super(options, 'uid'); }



    // $posts(){ return Posts.where('author.uid', '==', this.uid); }
    link(){ return `http://dimelo.vip/signup/${this.uid}`; }
    async $followers(){
        return this.$table.where('leader', '==', this.uid).get().then(snap=>snap.docs.map(e=>e.data()))
    }
}
