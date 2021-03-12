import React from 'react';
import useAuth from '~/ServerLess/hooks/useAuth';
import useStyles from '~/views/SignUp/styles/SignUp';
import useInputs from '~/ServerLess/hooks/useInputs';
import useForm from '~/views/SignUp/components/useForm';
import regions from '~/views/SignUp/components/regions';
import { Button, Chip, CircularProgress } from '@material-ui/core';
import GoogleAdress from '~/views/SignUp/components/GoogleAddress';
  


const FilterObject = (_ob_)=>Object.entries(_ob_).reduce((body, [key, value])=>{
    if(value){
        if(typeof value==='object'){
            const tmp = FilterObject(value);
            if( Object.keys(tmp).length )
                body[key]=tmp;
        }
        else body[key]=value;
    }
    return body;
},{});
const getValue = (_ob_)=>Object.entries(_ob_).reduce((values, [key, value])=>{
    if(value && typeof value==='object'){
        values = values || {};
        values[key]='value' in value?value.value:getValue(value);
    }
    return values;
},null);


export default function Account() {
    const user = useAuth();
    const classes = useStyles();
    const {
        inputs,
        loading,
        setLoading,
        setInputs,
        Autocomplete,
    } = useForm();
    const form = useInputs({
        status:null,
        message:'',
    });
    const saveForm = async (e)=>{
        await setLoading(true);
        await user.$update( FilterObject( getValue(inputs) ) )
            .then(async ()=> await form.setInputs({status:true, message:'Guardado'}))
            .catch(async ({ message })=> await form.setInputs({status:false, message}));
        await setLoading(false);
    };
    return (<>
    <div className={ classes.body }>
        <GoogleAdress FormControlProps={{className:'is-ligth'}} value={ user.$get('address.string') } />
        <div style={{margin:'20px 0 5px 0', flexBasis:'100%'}} />
        <Autocomplete
            bind="voting.departament" value={ user.$get('voting.departament') }
            FormControlProps={{className:'is-ligth'}} label='Departamento donde votas'
            options={regions.all}
            onChange={()=>setInputs({ voting:{ municipality:{value:''}, point:{value:''}, table:{value:''}, }, })}
        />
        <Autocomplete
            bind="voting.municipality" value={ user.$get('voting.municipality') }
            FormControlProps={{className:'is-ligth'}} label='Municipio donde votas'
            getOptions={()=>regions.path(inputs.voting.departament.value)}
            onChange={()=>setInputs({ voting:{ point:{value:''}, table:{value:''}, }, })}
        />
        <Autocomplete
            bind="voting.point" value={ user.$get('voting.point') }
            FormControlProps={{className:'is-ligth'}}
            label="Puesto de votación"
            getOptions={()=>regions.flat(`${inputs.voting.departament.value}.${inputs.voting.municipality.value}`)}
            TextFieldProps={{
                helperText:(<>
                <span key={1} style={{golor:'white'}}>Puedes consultar esta información </span>
                <a key={2} target='_blank' rel='noreferrer' href='https://wsp.registraduria.gov.co/censo/consultar/' style={{color:'#82D827'}}> AQUÍ</a>
                </>),
            }}
        />
        <Autocomplete
            bind="voting.table" value={ user.$get('voting.table') }
            FormControlProps={{className:'is-ligth'}} label='Mesa de votacion'
            TextFieldProps={{helperText:"Dinos tu número de mesa de votación"}}
            getOptions={()=>regions.deep(`${inputs.voting.departament.value}.${inputs.voting.municipality.value}`,)}
        />
    </div>
    <div className={ classes.actions }>
        { form.message && <Chip label={ form.message } variant="contained" color="secondary" /> }
        <Button
            color='primary'
            variant='contained'
            disabled={ loading }
            onClick={ saveForm }
            startIcon={ loading && <CircularProgress style={{ color: 'white' }} size={20} /> }
            children={ loading ? null : 'Guardar' }/>
    </div>
  </>);
}
  