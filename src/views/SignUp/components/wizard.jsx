import api from '~/ServerLess/api'
import Users from '~/ServerLess/Collections/Users'

export default async function wizard (useInput){
    const {
        step,
        inputs,
        nextStep,
        hasErrors,
        setInputs,
        setLoading,
    } = useInput;
    switch (step) {
        // case 1:
        //     if(!inputs.cedula.value) return setError('cedula','Se requiere una cédula de identidad');
        //     await setLoading(true);
        //     await setError('cedula',(
        //         snap.exists?'La cedula ya está registrada':(
        //             !client?'La cédula no existe en el registro nacional':null
        //         )
        //     ));
        //     if(!inputs.cedula.error){
        //         await setInputs({name:{value:client.name},lastname:{value:client.lastname},});
        //         await nextStep();
        //     }
        //     await setLoading(false);
        //     break;
        case 1:
            await setInputs({
                name:{ error:!inputs.name.value?'¿Cual es tu nombre?':(inputs.name.value.match(/[^a-zA-Z\s+]/gi)?'Tu nombre tiene caracteres inválidos':null ), },
                lastname:{ error:!inputs.lastname.value?'¿Cual es tu apellido?':(inputs.lastname.value.match(/[^a-zA-Z\s+]/gi)?'Tu apellido tiene caracteres inválidos':null ), },
                dni:{ error:!inputs.dni.value?'¿Cual es tu cédula de identidad?':(inputs.dni.value.match(/[^0-9.-\s+]/gi)?'Intenta con números unicamente':null ), },
                birthday:{ error:!inputs.birthday.value?'¿Cual es tu edad?':(
                    inputs.birthday.value.match(/[^0-9.-\s+]/gi)?'Intenta con números unicamente':(
                        inputs.birthday.value>99?'Parece que te has equivocado':(
                            inputs.birthday.value<18?'Para los procesos de votación debes tener mínimo 18 años':null
                        )
                    )
                )},
                movil:{error:!inputs.movil.value?'Se requiere numero de celular':(
                    inputs.movil.value.match(/\D+/gi)?'Solo se admiten números':null
                )},
                phone:{error:(inputs.phone.value&&inputs.phone.value.match(/\D+/gi))
                    ?'Solo se admiten números':null},
            })
            if(!hasErrors('name', 'lastname', 'dni', 'birthday', 'movil', 'phone',)){
                await setLoading(true);
                await Users.where('dni','==',inputs.dni.value).get()
                .then(async snap=>{
                    await setLoading(false);
                    if(snap.empty) await nextStep();
                    else await setInputs({dni:{error:'La cedula ya está registrada'}});
                });
            }
            break;
        case 2:
            await setInputs({
                username:{ error:!inputs.username.value?'Se requiere un nombre de usuario':( inputs.username.value.match(/[^a-zA-Z0-9-_.]/gi)?'Puedes utilizar letras, números, guiones y puntos. (a-z A-Z 0-9 . - _)':null ), },
                password:{ error: !inputs.password.value?'Contraseña necesaria':( inputs.password.value.length<6?'Debe tener al menos 6 caracteres':null ) },
                repassword:{ error: !inputs.repassword.value?'Por favor confirma tu clave':(inputs.password.value!==inputs.repassword.value?'Las claves no son iguales':null ) },
                email:{ error:!inputs.email.value?'Se requiere un correo electrónico':( !inputs.email.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)?'El email tiene un formato incorrecto.':null ) },
            })
            if(!hasErrors('username', 'email','password', 'repassword',)){
                await setLoading(true);
                const [ _username, _email ] = await Promise.all([
                    Users.where('username','==', inputs.username.value).get(),
                    Users.where('email','==', inputs.email.value).get(),
                ]);
                await setInputs({
                    username:{error:!_username.empty?`${inputs.username.value} no disponible.`:null},
                    email:{error:!_email.empty?'Email ya registrado.':null},
                });
                await setLoading(false);
                if(!inputs.username.error && !inputs.email.error)
                    await nextStep();
            }
            break;
        case 3:
            await setInputs({
                voting_dep:{error:!inputs.voting_dep.value?'Selecciona un departamento':null},
                voting_mun:{error:!inputs.voting_mun.value?'Selecciona un municipio':null},
                voting_point:{error:!inputs.voting_point.value?'Selecciona tu puesto de votación':null},
                voting_table:{error:!inputs.voting_table.value?'¿Cual es tu mesa de votación?':null},
                voting_leader:{error:!inputs.voting_leader.value?'Elige un líder de la lista':null},
            });
            if(!hasErrors( 'voting_dep', 'voting_mun', 'voting_point', 'voting_table', 'voting_leader', ))
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
                adults:{error:!inputs.adults.value?'Te agradecemos una respuesta':null},
                partners:{error:(!inputs.partners.value)?'Se requiere una respuesta':null},
            });
            if(!hasErrors('adults','partners')){
                await setLoading(true);
                const client = Object.values(inputs).reduce((_, {name,value})=>({..._,...(name!=='repassword'?{[name]:value}:{})}),{});
                await api('auth/signup', client)
                    .then(()=>nextStep())
                    .catch(error=>alert(error.message))
                    .finally(()=>setLoading(false));
            }
            break;
        default:
            break;
    }
}