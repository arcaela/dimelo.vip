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
import StepResult from './Components/StepResult';
import { TestButton } from './Components/TestButton';

import useTest from '~/hooks/useTest';
import WelcomeImage from '~/images/test/welcome.svg'
import {
  Container,
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


export default function PageTest(){
  const classes = useStyles();
  const { inputs, step, setStep, nextStep, StepComponent } =  useTest();
  return (<Layout middleware={['auth']}>
    <Container maxWidth="xs" className={classes.root} >
      { step === 0 && (<article style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center', }}>
        <img src={WelcomeImage} alt="Bienvenido al test de personalidad"/>
        <Typography paragraph>
          Queremos saber un poco más de ti, así podremos potenciar todas las cualidades de nuestro equipo de trabajo en toda la ciudad.
        </Typography>
        <TestButton onClick={ ()=> nextStep() } fullWidth>¡Comencemos!</TestButton>
      </article>) }
      { step >= 21 && <StepResult {...inputs} setStep={setStep} /> }
      { step <= 20 && step>0 && (<StepComponent offset={1} steps={[
        {key:'formal',render:StepFormal},
        {key:'analitico',render:StepAnalitico},
        {key:'imparcial',render:StepImparcial},
        {key:'organizado',render:StepOrganizado},
        {key:'cuestionador',render:StepCuestionador},
        {key:'arriesgado',render:StepArriesgado},
        {key:'creativo',render:StepCreativo},
        {key:'energico',render:StepEnergico},
        {key:'ambicioso',render:StepAmbicioso},
        {key:'competitivo',render:StepCompetitivo},
        {key:'alegre',render:StepAlegre},
        {key:'poetico',render:StepPoetico},
        {key:'amigable',render:StepAmigable},
        {key:'popular',render:StepPopular},
        {key:'indeciso',render:StepIndeciso},
        {key:'callado',render:StepCallado},
        {key:'conciliador',render:StepConciliador},
        {key:'pacifico',render:StepPacifico},
        {key:'reflexivo',render:StepReflexivo},
        {key:'inexpresivo',render:StepInexpresivo},
      ]} />)}
    </Container>
  </Layout>);
}