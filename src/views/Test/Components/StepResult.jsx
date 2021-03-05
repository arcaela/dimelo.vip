import clsx from 'clsx';
import React from 'react'
import { merge } from 'lodash';
import { Home, Repeat } from '@material-ui/icons'
import { scopes, useAuth, firebase } from '~/ServerLess';
import { Button, makeStyles, Typography } from '@material-ui/core'




const useStyles = makeStyles({
  root:{
    height:'100%',
    '& .MuiTypography-h4':{margin:'30px 0 20px 0'},
    '& .MuiTypography-body2':{margin:'30px 0 0 0'},
    '& .MuiTypography-subtitle1':{padding:'5px 10px', borderRadius:5, color:'#fff'},
  },
  loading:{
    background:'url(/images/brand.svg) no-repeat center /200px',
    animation:'$pulsate 2s infinite',
    '& *':{display:'none',visibility:'hidden'}
  },
  '@keyframes pulsate': {
    '0%': { opacity: .4, },
    '50%': { opacity: 1, },
    '100%': { opacity: .4, },
  },
});



export default function StepResult({setStep, ...inputs}){
  const auth = useAuth();
  const classes = useStyles();
  const [ state, _reset ] = React.useState({ loading:true, profiles:{}, });
  const setState = newObject=>_reset({...merge(state, newObject)});
  Object.keys(inputs.profiles).forEach(k=>state.profiles[k]={...inputs.profiles[k],points:0});
  Object.values(inputs.cards).forEach(card=>{
    const profile = state.profiles[card.profile];
    if(card.value===true) profile.points+=1;
    else if(card.value===false) state.profiles[profile.alter].points+=1;
  });
  const profile = Object.values(state.profiles).sort(()=>Math.random()-0.3)
    .reduce((profile, current)=>(current.points>profile.points?current:profile),{points:0});
  if(auth && state.loading && profile.points>0){
    const batch = firebase.firestore().batch();
    batch.update(scopes.users.doc(auth.uid),{ patron:profile.name, });
    batch.set(firebase.firestore().collection('tests').doc(auth.uid),{ ...inputs, user:auth.uid, });
    batch.commit().then(()=>setState({loading:false,profiles:{}}));
  }
  return (<article className={clsx(classes.root, (!auth || state.loading) && classes.loading)}>
    <Typography variant="h4">¡Lo tenemos!</Typography>
    <Typography paragraph variant="subtitle2" component="div">
      Eres un coequipero <strong>{profile.label.replace('-',' y ')}</strong>. <br />
      Tu ayuda es muy valiosa para nuestro equipo. Con tu trabajo, disciplina y constancia estamos más cerca de alcanzar la meta.
    </Typography>
    <Typography variant="body2">
      Tu patrón actitudinal es
    </Typography>
    <div style={{margin:'10px 0 30px 0'}}>
        <Typography variant="subtitle1" component="span" style={{background:profile.color}}>
          {profile.name}
        </Typography>
    </div>
    <img alt="" src={`/images/test/resultado/${profile.label}.svg`} style={{maxWidth:300}} />
    <div style={{display:'flex',flexDirection:'row',}}>
      <Button onClick={()=>window.location.replace('/posts')} color="secondary" variant="contained" size="small" style={{color:'white'}} children={<Home />} />
      <Button onClick={()=>setStep(0)} color="primary" variant="contained" size="small" style={{flexGrow:1,display:'flex',marginLeft:5}} children={<><Repeat /> Repetir Test</>} />
    </div>
  </article>)
}