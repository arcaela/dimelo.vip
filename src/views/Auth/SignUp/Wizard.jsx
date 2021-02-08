export default async function Wizard (useHooks){
    const {
        step,
        inputs,
        nextStep,
        setError,
        hasErrors,
        setInputs,
        firestore,
        setLoading,
    } = useHooks;

    switch (step) {
        case 1:
            if(!inputs.cedula.value) return setError('cedula','Se requiere una cédula de identidad');
            await setLoading(true);
            const client = await firestore.collection('users').where('cedula','==',inputs.cedula.value).get()
                .then(async snap=>{
                    if(!snap.empty){
                        await setError('cedula','La cedula ya está registrada');
                        return null;
                    };
                    return await fetch("https://api.misdatos.com.co/api/co/consultarNombres",{
                        method:'POST',
                        redirect:'follow',
                        headers:new Headers({
                            "Authorization":([
                                'xfjjbqqt7lnr36le1ako2yc9mnw4lugq14ouzyqbqt5yafww',
                                '4rccwa6ls0tmgd4pbawm8cvfc8lkjrxxt1ji8czzaa7rr55i',
                                'd4alsheb1nixmq9rqu9ultjlphfv7u7at4b7rxy10riy4gvn',
                                'rnu16w5qb25de1f7m7nn7he0v2wrcapelkry7gtpp770nb5y',
                                '24u5a0cyf2qbd4uxendniy4bxd2hhrhx83289muehp56iupu',
                                '2ecek3oivbdqaryi2l6s77senk2db7jorzxr8kpy7jdnxm6a',
                                'rssxjqwljg4shuce98oohe6xfbt3xvmn0llgjc7v9f3y6pfk',
                                'o1vlqkzuu4g5i7ik9neefyxr8nytf9j1ziqn5kcxhjhfog3a',
                                '1gq38u0t40f23iyc5i9l3xmmtc0h3pvg3s81i7yap6pjpcjo',
                            ]).sort(()=>Math.random()-0.5)[0],
                            "Content-Type":"application/x-www-form-urlencoded",
                        }),
                        body:new URLSearchParams({ documentType:"CC", documentNumber:inputs.cedula.value, }),
                    }).then(res=>res.ok?res.json():null)
                    .then(res=>(res&&res.data)?(res.data.firstName?res.data:null):null)
                });
            await setLoading(false);
            if(client){
                await setInputs({
                    name:{value:client?client.firstName:inputs.name.value},
                    lastname:{value:client?client.lastName:inputs.lastname.value},
                });
                await nextStep();
            }
            break;
        case 2:
            const { username,password, email, age, } = inputs;
            await setInputs({
                username:{ error:!username.value?'Se requiere un nombre de usuario':( username.value.match(/[^a-zA-Z0-9-_.]/gi)?'Puedes utilizar letras, números, guiones y puntos. (a-z A-Z 0-9 . - _)':null ), },
                password:{ error: !password.value?'Contraseña necesaria':( password.value.length<6?'Debe tener al menos 6 caracteres':null ) },
                email:{ error:!email.value?'Se requiere un correo electrónico':( !email.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)?'El email tiene un formato incorrecto.':null ) },
                age:{ error:!age.value?'Especifíca tu edad':( age.value<18?'Debes tener al menos 18 años':null ) },
            })
            if(!username.error && !password.error && !email.error && !age.error){
                await setLoading(true);
                const finds = await Promise.all([
                    firestore.collection('users').where('username','==', username.value).get(),
                    firestore.collection('users').where('email','==', email.value).get(),
                ]);
                await setInputs({
                    username:{error:!finds[0].empty?`${username.value} no disponible.`:null},
                    email:{error:!finds[1].empty?'Email ya registrado.':null},
                });
                await setLoading(false);
                if(!username.error && !email.error)
                    await nextStep();
            }
            break;
        case 3:
            await setInputs({
                departamento:{error:!inputs.departamento.value?'Selecciona un departamento':null},
                municipio:{error:!inputs.municipio.value?'Selecciona un municipio':null},
                direccion:{error:(!inputs.direccion.value||inputs.direccion.value.length<6)?'Se debe indicar la direccion':null},
                phone:{error:!inputs.phone.value?'Se requiere numero de teléfono':(
                    inputs.phone.value.match(/\D+/gi)?'Solo se admiten números':null
                )},
                movil:{error:!inputs.movil.value?'Se requiere numero de celular':(
                    inputs.movil.value.match(/\D+/gi)?'Solo se admiten números':null
                )},
            });
            if(!hasErrors('departamento','municipio','direccion','phone','movil'))
                await nextStep();
            break;
        case 4:
            await setInputs({
                voting_dep:{error:!inputs.voting_dep.value?'Selecciona un departamento':null},
                voting_mun:{error:!inputs.voting_mun.value?'Selecciona un municipio':null},
                voting_point:{error:(!inputs.voting_point.value)?'¿Cuál es tu puesto de votación?':null},
                voting_table:{error:!inputs.voting_table.value?'¿Cuál es tu mesa de votación?':(
                    inputs.voting_table.value.match(/\D+/gi)?'Solo se admiten números':null
                )},
                voting_leader:{error:!inputs.voting_leader.value?'¿Quién es tu lider?':null},
            });
            if(!hasErrors('voting_dep','voting_mun','voting_point','voting_table','voting_leader'))
                await nextStep();
            break;
            case 5:
                await setInputs({
                    people_depend:{error:!inputs.people_depend.value?'Te agradecemos una respuesta':null},
                    people_join:{error:(!inputs.people_join.value)?'Se requiere una respuesta':null},
                });
                if(!hasErrors('people_depend','people_join')){
                    await setLoading(true);
                    await firestore.collection('users').doc()
                        .set(Object.values(inputs).reduce((_, {name,value})=>{
                            _[name]=value;
                            return _;
                        },{}));
                    await setInputs(Object.keys(inputs).reduce((_, k)=>{
                        _[k]={value:'',error:null};
                        return _;
                    },{}));
                    await setLoading(false);
                    await nextStep();
                }
                break;
            default:
            break;
    }
}