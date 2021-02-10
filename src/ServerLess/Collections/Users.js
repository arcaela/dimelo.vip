import { merge } from 'lodash'
import { reference } from '../'




export class Profile {
    $props = {};
    constructor(object){ return this.$merge(object); }
    $merge($data){
        this.$props = merge(this.$props, $data);
        return this;
    }
    update(){}
    toJSON(){ return {...this.$props}; }
}


export default reference('users')
    // .withConverter({
        // toFirestore:profile=>profile.toJSON(),
        // fromFirestore:(snap, options)=>new Profile(snap.data(options)),
    // });