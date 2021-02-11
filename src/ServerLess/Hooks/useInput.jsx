import React from 'react'
import { merge } from 'lodash';
import firebase from '~/config/firebase'
import { FormControl, FormHelperText, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';


let Inputs = {
    cedula:{name:'cedula', value:'19803874', error:null, },
    name:{name:'name', value:'Hosni', error:null, },
    lastname:{name:'lastname', value:'Colina', error:null, },

    username:{name:'username', value:'hosnic', error:null, },
    password:{name:'password', value:'123456', error:null, },
    email:{name:'email', value:'', error:null, },
    age:{name:'age', value:'30', error:null, },

    departamento:{name:'departamento', value:'ANTIOQUIA', error:null, },
    municipio:{name:'municipio', value:'MEDELLIN', error:null, },
    comuna:{name:'comuna', value:'BARRANQUILLA', error:null, },
    direccion:{name:'direccion', value:'BARRANQUILLA', error:null, },
    phone:{name:'phone', value:'20504507', error:null, },
    movil:{name:'movil', value:'20504507', error:null, },


    voting_dep:{name:'voting_dep', value:'ATLANTICO', error:null, },
    voting_mun:{name:'voting_mun', value:'BARRANQUILLA', error:null, },
    voting_point:{name:'voting_point', value:'COL.DTAL OLAYA(ANT C.E.B.108)', error:null, },
    voting_table:{name:'voting_table', value:'12', error:null, },
    voting_leader:{name:'voting_leader', value:'Rodrigo Cardona', error:null, },

    people_depend:{name:'people_depend', value:'2', error:null, },
    people_join:{name:'people_join', value:'2', error:null, },
};

export default function useInput(){
    const [inputs, _reset] = React.useState(Inputs);
    const [loading, setLoading] = React.useState(false);
    const setInputs = newObject=>_reset({...(Inputs=merge(Inputs, newObject))});
    const setInput = (key, newObject)=>_reset({...(Inputs=merge(Inputs,{[key]:merge(Inputs[key],newObject)}))});
    const setError = (key,error)=>setInput(key,{error});
    const unsetError = (key)=>setError(key,null);
    const ErrorsOf = (..._keys)=>{
        const keys = _keys.flat();
        return Object.entries(inputs).reduce((_, [key, {error}])=>(
            ((!keys.length || keys.indexOf(key)>-1)&&error)?_.concat(error):_
        ),[])
    };

    const [step, _setStep] = React.useState( 2 );
    const setStep = (e)=>_setStep(e);
    const nextStep = ()=>setStep(p=>p+1);
    const prevStep = (callback=()=>{})=>setStep(p=>p>0?p-1:callback());
    const StepComponent = (props)=>(<div
        {...props}
        role="tabpanel"
        hidden={step !== props.step}
        id={`step-tabpanel-${props.step}`}
        aria-labelledby={`step-tab-${props.step}`}
    />);
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
        firestore:firebase.app('firestore').firestore(),
        hasErrors:(..._keys)=>Boolean(ErrorsOf(..._keys).length>0),
        Autocomplete:({label='N/D',InputLabelProps,InputProps, ...props})=>{
            const input = inputs[props.name];
            return (<FormControl variant="outlined">
                <FormHelperText>{ input.error || label }</FormHelperText>
                <Autocomplete
                    freeSolo
                    fullWidth
                    disableClearable
                    options={[]}
                    getOptionSelected={(o)=>o===input.value}
                    renderInput={(params)=>(<TextField {...params} InputProps={{
                        ...params.InputProps,
                        ...InputProps,
                    }} InputLabelProps={InputLabelProps} variant="outlined" />)}
                    {...props}
                    value={props.disabled ? '- - - - - -' : (input.value || props.value) }
                    onChange={async (e,value)=>{
                        await setInputs({ [input.name]:{value} });
                        await (props.onChange || ((e,value)=>value))(e, value);
                        return value;
                    }} />
            </FormControl>)
        },
        InputField:({type='text',InputProps={}, onChange=()=>{},...props})=>{
            const [showPass,setShowPass] = React.useState(false);
            const input = inputs[props.name];
            input.ref = input.ref || React.createRef();
            props.error = Boolean(input.error || props.error || false);
            props.helperText = input.error || props.helperText || '';
            props.onChange = (e)=>{
                input.value = Inputs[props.name].value = e.target.value;
                return onChange(e);
            };
            if(type==='password'){
                InputProps.endAdornment = (<InputAdornment position="end"
                    children={<IconButton
                        aria-label="toggle password visibility"
                        onClick={()=>setShowPass(!showPass)}
                        children={showPass?<Visibility/>:<VisibilityOff/>}
                    />} />);
                props.inputProps = merge(props.inputProps, {
                    style:{textAlign:'center',},
                });
            }
            return <TextField variant="outlined" defaultValue={input.value} {...props} InputProps={InputProps} type={showPass?'text':type} />
        },
    };
}