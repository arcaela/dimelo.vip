import React from 'react';
import Layout from '../layout'
import StepEnergico from './Components/StepEnergico';
import StepAlegre from './Components/StepAlegre';
import StepAmbicioso from './Components/StepAmbicioso';
import StepAmigable from './Components/StepAmigable';
import StepAnalitico from './Components/StepAnalitico';
import StepArriesgado from './Components/StepArriesgado';
import StepCallado from './Components/StepCallado';
import StepCompetitivo from './Components/StepCompetitivo';
import StepConciliador from './Components/StepConciliador';
import StepCreativo from './Components/StepCreativo';
import StepCuestionador from './Components/StepCuestionador';
import StepFormal from './Components/StepFormal';
import StepImparcial from './Components/StepImparcial';
import StepIndeciso from './Components/StepIndeciso';
import StepInexpresivo from './Components/StepInexpresivo';
import StepOrganizado from './Components/StepOrganizado';
import StepPacifico from './Components/StepPacifico';
import StepPoetico from './Components/StepPoetico';
import StepPopular from './Components/StepPopular';
import StepReflexivo from './Components/StepReflexivo';
import { TestButton } from './Components/TestButton';

import useTest from '../../ServerLess/Hooks/useTest';
import WelcomeImage from '../../images/test/welcome.svg'
import Dimelo from '../../images/test/dimelo.svg'
import {
  Container,
  withStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';



const useStyles = makeStyles(()=>({
  root:{
    margin:'auto',
    height:'100%',
    '& img':{ maxWidth:'100%', },
  },
}));

/* @useTest
    inputs = @Object
    setInputs = @Clousure ( Merge )
    StepComponent = Render Active Step
    cards = {
        $all: @Object,
        $active: @Component
    }
    step = @stepValue
    nextStep = setStep(p=>p+1);
    prevStep = setStep(p=>p<1?0:p-1);
*/


const StepLoading = withStyles(()=>({
    root:{
        height:300,
        display:'flex',
        backgroundImage:`url(${Dimelo})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'200px',
        opacity:0,
        animation:`$pulse 2s infinite`,
    },
    "@keyframes pulse":{
        "0%":{opacity:.5},
        "50%":{opacity:1},
        "100%":{opacity:.5},
    },
}))(({classes})=><div className={classes.root} />)



export default function PageTest(){
  const classes = useStyles();
  const [ loading, setLoading ] = React.useState(false);
  const { inputs, step, nextStep, StepComponent } =  useTest();
  if(step>20 && !loading){
    setLoading(true);
    Object.values(inputs.cards).forEach(card=>{
      const profile = inputs.profiles[card.profile];
      if(!!card.value) profile -= 1;
      else inputs.profiles[profile.alter] -= 1;
    });
    const profile = Object.values(inputs.profiles).sort((a,b)=>a.points>b.points?1:-1)[0];
    
    console.log( inputs );
  }
  return (<Layout>
    <Container maxWidth="xs" className={classes.root} >
        { step===0 && (<article style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'center',
          alignItems: 'center',
        }}>
            <img src={WelcomeImage} alt="Bienvenido al test de personalidad"/>
            <Typography paragraph>
              Queremos saber un poco más de ti, así podremos potenciar todas las cualidades de nuestro equipo de trabajo en toda la ciudad.
            </Typography>
            <TestButton onClick={ ()=> nextStep() } fullWidth>¡Comencemos!</TestButton>
        </article>)}
        <StepComponent offset={1} steps={[
            StepFormal,
            StepAnalitico,
            StepImparcial,
            StepOrganizado,
            StepCuestionador,
            StepArriesgado,
            StepCreativo,
            StepEnergico,
            StepAmbicioso,
            StepCompetitivo,
            StepAlegre,
            StepPoetico,
            StepAmigable,
            StepPopular,
            StepIndeciso,
            StepCallado,
            StepConciliador,
            StepPacifico,
            StepReflexivo,
            StepInexpresivo,
        ]} />
        { loading && <StepLoading /> }
    </Container>
  </Layout>);
}