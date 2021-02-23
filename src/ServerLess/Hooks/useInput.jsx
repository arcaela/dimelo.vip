import React from 'react'
import { get, merge, set } from 'lodash';
import firebase from '~/config/firebase'
import { FormControl, FormHelperText, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';





const $store = {
    inputs:{
        name:{ name:'name', value:'', error:null, },
        lastname:{ name:'lastname', value:'', error:null, },
        dni:{ name:'dni', value:'', error:null, },
        birthday:{ name:'birthday', value:'', error:null, },
        movil:{ name:'movil', value:'', error:null, },
        phone:{ name:'phone', value:'', error:null, optional:true,},
        
        username:{name:'username', value:'', error:null, },
        email:{name:'email', value:'', error:null, },
        password:{name:'password', value:'', error:null, },
        repassword:{name:'repassword', value:'', error:null, },
        
        address:{name:'address', value:'', error:null, },
    
        voting_dep:{name:'voting_dep', value:'', error:null, },
        voting_mun:{name:'voting_mun', value:'', error:null, },
        voting_point:{name:'voting_point', value:'', error:null, },
        voting_table:{name:'voting_table', value:'', error:null, },
        voting_leader:{name:'voting_leader', value:'', error:null, },
    
        adults:{name:'adults', value:'', error:null, },
        partners:{name:'partners', value:'', error:null, },
    },
    firestore:firebase.app('firestore').firestore(),
};

export function makeGetter(_ob_){
    const fn = (path,...value)=>{
        if(!value.length) return get(_ob_, path);
        set(_ob_, path, value[0]);
        return value[0];
    };
    return Object.defineProperties(fn,Object.keys(_ob_).reduce((properties, key)=>{
        properties[key]={
            enumerable:true,
            get:()=>_ob_[key],
            set:(value)=>_ob_[key]=value,
        };
        return properties;
    },{}));
}


export default function useInput(){
    const [loading, setLoading] = React.useState(false);
    const [ _inputs , _reset ] = React.useState( $store.inputs );
    const inputs = makeGetter( _inputs );
    const setInput = (key, _ob_)=>setInputs({[key]:_ob_});
    const setInputs = (_ob_)=>_reset(_prev=>({...($store.inputs=merge(_prev,_ob_))}));
    const unsetError = (key)=>setError(key,null);
    const setError = (key,error)=>setInput(key,{error});
    const ErrorsOf = (..._keys)=>{
        const keys = _keys.flat();
        return Object.entries(inputs).reduce((_, [key, {error,optional=null}])=>(
            ((!keys.length||keys.indexOf(key)>-1)&&error&&!optional)?_.concat(error):_
        ),[])
    };
    const [step, _setStep] = React.useState(4);
    const setStep = (e)=>_setStep(e);
    const nextStep = ()=>setStep(p=>p+1);
    const prevStep = (callback=()=>{})=>setStep(p=>p>0?p-1:callback());
    const StepComponent = ({children, ...props})=>((step===props.step)&&children);
    return {
        step,
        setStep,
        nextStep,
        prevStep,
        StepComponent,
        loading,
        setLoading,
        inputs,
        setInput,
        setInputs,
        setError,
        unsetError,
        ErrorsOf,
        firestore:$store.firestore,
        hasErrors:(..._keys)=>Boolean(ErrorsOf(..._keys).length>0),
        Autocomplete:({ label, getOptions, FormControlProps={}, TextFieldProps={}, onChange, ...props })=>{
            const input = inputs[props.name];
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
                return inputs(`${input.name}.value`,value);
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
        InputField:({label='', FormControlProps={}, onChange=()=>{}, ...props})=>{
            const [showPass,setShowPass] = React.useState(false);
            const input = inputs[props.name];
            props.error = Boolean(input.error || props.error || false);
            props.onKeyUp = (e)=>{
                if(e.target.matches('input')){
                    inputs(`${input.name}.value`, e.target.value)
                    return onChange(e);
                }
                return props.onKeyUp||(()=>{});
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
                <FormHelperText children={input.error||label} />
                <TextField variant="outlined" defaultValue={input.value} {...props} type={showPass?'text':props.type} />
            </FormControl>)
        },
    };
}