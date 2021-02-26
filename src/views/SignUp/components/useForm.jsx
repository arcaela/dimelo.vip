import React from 'react'
import {
    TextField,
    IconButton,
    FormControl,
    InputAdornment,
    FormHelperText,
} from '@material-ui/core';
import firebase from '~/config/firebase'
import { merge } from 'lodash'
import useInputs from '~/ServerLess/Hooks/useInputs';
import { Autocomplete } from '@material-ui/lab';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useGetter } from '~/ServerLess/utils';



const $store = {
    inputs:{
        /* Step 1 */
        leader:{name:'leader', value:'', error:null,
            invalid(){ return !this.value?'Se requiere un código de invitación para continuar':null; },
        },
        fullname:{ name:'fullname', value:'', error:null,
            invalid(){ return !this.value?'¿Cual es tu nombre?':(this.value.match(/[^a-zA-Z\s+]/gi)?'Tu nombre tiene caracteres inválidos':null); },
        },
        dni:{name:'dni', value:'', error:null,
            invalid(){ return !this.value?'¿Cual es tu cédula de identidad?':(this.value.match(/[^0-9.-\s+]/gi)?'Intenta con números unicamente':( this.value<100000?'Cédula inválida':null )); },
        },
        birthday:{name:'birthday', value:'', error:null,
            invalid(){ return !this.value?'¿Cual es tu fecha cumpleaños?':( !this.value.match(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/mgi) ?'Formato de Fecha incorrecto':null); },
        },
        address:{name:'address', value:'', error:null,
            invalid(){ return !this.value?'Indicanos tu dirección de residencia':null; },
        },

        /* Setp 2 */
        email:{name:'email', value:'', error:null,
            invalid(){ return !this.value?'Se requiere un correo electrónico':( !this.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)?'El email tiene un formato incorrecto.':null ); },
        },
        password:{name:'password', value:'', error:null,
            invalid(){ return !this.value?'Contraseña necesaria':( this.value.length<6?'Debe tener al menos 6 caracteres':null ); },
        },
        movil:{name:'movil', value:'', error:null,
            invalid(){ return !this.value?'Se requiere numero de celular':( this.value.match(/\D+/gi)?'Solo se admiten números' :(this.value<0?'Formato incorrecto':null)); },
        },
        phone:{name:'phone', value:'', error:null,
            invalid(){ return !this.value?null:(this.value.match(/\D+/gi)?'Solo se admiten números':(this.value<0?'Formato incorrecto':null)); },
        },


        voting_dep:{name:'voting_dep', value:'', error:null,
            invalid(){ return !this.value?'Selecciona un departamento':null },
        },
        voting_mun:{name:'voting_mun', value:'', error:null,
            invalid(){ return !this.value?'Selecciona un municipio':null },
        },
        voting_point:{name:'voting_point', value:'', error:null,
            invalid(){ return !this.value?'¿Cuál es tu puesto de votación?':null },
        },
        voting_table:{name:'voting_table', value:'', error:null,
            invalid(){ return !this.value?'¿Cuál es tu mesa de votación?':( this.value.match(/\D+/gi)?'Solo se admiten números':null )},
        },
    
        adults:{name:'adults', value:'', error:null,
            invalid(){ return !this.value?'Te agradecemos una respuesta':( !this.value.match(/^\d+$/gi)?"Solo se admiten números":null )},
        },
        partners:{name:'partners', value:'', error:null,
            invalid(){ return !this.value?'Se requiere una respuesta':( !this.value.match(/^\d+$/gi)?"Solo se admiten números":null )},
        },
    },
    firestore:firebase.app('firestore').firestore(),
};



export default function useForm(){
    const _configs = {
        onUpdate:_inputs_=>$store.inputs=_inputs_,
        onGet(_ob_, key=''){
            const index = key.split('.')[0];
            if(!(index in _ob_))
                this.set(index, {name:index,value:'',error:null,optional:true});
        },
    };
    const [ $inputs, $setInputs ] = React.useState( $store.inputs );
    const inputs = useGetter($inputs, _configs);
    const setInput = (key,value)=>setInputs({[key]:value});

    const setInputs = (_value_)=>{
        const value = ({...merge($inputs, inputs, _value_)});
        _configs.onUpdate(value);
        return $setInputs(value);
    };
    const setError = (key, error)=>setInputs({[key]:{error}});
    const unsetError = (key)=>setInputs({[key]:{error:null}});
    const inputsErrors = (...keys)=>{
        return keys.flat().reduce((errors, key)=>{
            const error = inputs[key].invalid();
            errors={...errors,[key]:{error}};
            return errors;
        },{});
    }


    const [loading, setLoading] = React.useState(false);
    const [step, setStep] = React.useState(1);
    const nextStep = ()=>setStep(p=>p+1);
    const prevStep = (callback=()=>{})=>setStep(p=>p>0?p-1:callback());
    const StepComponent = ({children, ...props})=>((step===props.step)&&children);

    return {
        inputs,
        setInput,
        setInputs,
        firestore:$store.firestore,

        setError,
        unsetError,
        inputsErrors,
        hasErrors:(..._keys)=>!!inputsErrors(..._keys),

        step,
        loading,
        nextStep,
        prevStep,
        setLoading,
        StepComponent,

        Autocomplete({ label, getOptions, FormControlProps={}, TextFieldProps={}, onChange, ...props }){
            const input = inputs(props.name);
            const [ open, setOpen ] = React.useState(false);
            props.open = props.open || open;
            props.onOpen = props.onOpen || (()=>setOpen(true));
            props.onClose = props.onClose || (()=>setOpen(false));
            props.value=input.value || props.value || null;
            props.options = getOptions
                ?(props.open?getOptions(inputs):[])
                :(props.options||[]);
            props.onInputChange = !props.onInputChange&&(async (e,value)=>{
                if(e && e.type==='click'){
                    await setInputs({[input.name]:{value}});
                    return await (onChange||((e,value)=>value))(e,value);
                }
                return input.value=value;
            });
            return (<FormControl variant="outlined" {...FormControlProps}>
                <FormHelperText children={input.error || label} error={!!input.error} />
                <Autocomplete freeSolo fullWidth autoHighlight
                    renderInput={params=><TextField variant="outlined" {...merge(params, TextFieldProps,{
                        InputProps:merge(params.InputProps, TextFieldProps.InputProps),
                        error:!!input.error,
                    })} />}
                { ...props } />
            </FormControl>);
        },
        InputField({label='', FormControlProps={}, onChange=()=>{}, onKeyUp=()=>{}, ...props}){
            const [showPass,setShowPass] = React.useState(false);
            const input = inputs(props.name);
            props.error = !!(input.error || props.error || false);
            props.onKeyUp = (e)=>{
                if(e.target.matches('input')){
                    input.value = e.target.value;
                    return onChange(e);
                }
                return onKeyUp(e);
            };
            if(props.type==='password'){
                props.inputProps = merge(props.inputProps, {style:{textAlign:'center'}});
                props.InputProps = merge(props.InputProps,{
                    endAdornment:(<InputAdornment position="end" children={<IconButton
                        aria-label="toggle password visibility"
                        onClick={()=>setShowPass(!showPass)}
                        children={showPass?<Visibility/>:<VisibilityOff/>}
                    />} />),
                })
            }
            return (<FormControl variant="outlined" error={!!props.error} {...FormControlProps}>
                <FormHelperText children={ input.error||label } />
                <TextField variant="outlined" defaultValue={input.value} {...props} type={showPass?'text':props.type} />
            </FormControl>)
        },
    };
}