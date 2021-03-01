import Users from '~/ServerLess/collections/Users';
import api from '~/ServerLess/utils/api'

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
        return Object.values(errors).filter(v=>!!v.error).length?!!setInputs(errors):true;
    };
    const build = ({...object})=>{
        return Object.entries(object).reduce((_ob_, [key, value])=>(
            {..._ob_,[key]:(('value' in value)?value.value:build(value))}
        ),{});
    };
    switch (step) {
        case 1:
            if(!Check('fullname', 'cedula', 'birthday', 'address')) return;
            await setLoading(true);
            Users.where('cedula','==',inputs.cedula.value).get()
            .then(async snap=>{
                if(snap.empty) await nextStep();
                else await setInputs({cedula:{error:'La cédula ya está registrada'}});
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
            if(!Check( 'voting.departament', 'voting.municipality', 'voting.point', 'voting.table', )) return;
            await nextStep();
        break;
        case 4:
            if(!Check( 'family.adults', 'family.partners' )) return;
            const client = build(inputs);
            await setLoading(true);
            await api('auth/signup', client)
                .then(()=>nextStep())
                .catch(error=>console.log(error, alert(error.message)))
                .finally(()=>setLoading(false));
            break;
        default:
            break;
    }
}