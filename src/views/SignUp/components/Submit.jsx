import api from '~/ServerLess/utils/api'
import Users from '~/ServerLess/collections/Users';

export default async function Submit (useForm){
    const {
        step,
        inputs,
        nextStep,
        setInputs,
        setLoading,
        inputsErrors,
    } = useForm;
    const Check = (...keys)=>{
        const errors = inputsErrors(...keys);
        return Object.entries(errors).filter(([k,v])=>!!v.error).length?!!setInputs(errors):true;
    };

    switch (step) {
        case 1:
            if(!Check('fullname', 'dni', 'birthday', 'address')) return;
            await setLoading(true);
            Users.where('dni','==',inputs.dni.value).get()
            .then(async snap=>{
                if(snap.empty) await nextStep();
                else await setInputs({dni:{error:'La cédula ya está registrada'}});
            }).finally(async ()=>await setLoading(false));
        break;
        case 2:
            if(!Check('email', 'password', 'movil', 'phone')) return;
            await setLoading(true);
            Users.where('email','==', inputs.email.value).get()
            .then(async snap=>{
                if(snap.empty) await nextStep();
                else await setInputs({email:{error:'Email ya registrado'}});
            }).finally(async ()=>await setLoading(false))
        break;
        case 3:
            if(!Check( 'voting_dep', 'voting_mun', 'voting_point', 'voting_table', )) return;
            await nextStep();
        break;
        case 4:
            if(!Check( 'adults', 'partners' )) return;
            const client = Object.values(inputs).reduce((_, {name,value})=>({..._,[name]:value}),{});
            await setLoading(true);
            await api('auth/signup', client)
                .then(()=>nextStep())
                .catch(error=>alert(error.message))
                .finally(()=>setLoading(false));
            break;
        default:
            break;
    }
}