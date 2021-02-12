import React from 'react'
import { merge } from 'lodash';

import '../api';


let Inputs = {
    cards:{
        formal:{
            profile:'control', key:'formal', value:null,
            label:'¿Con cual de las dos imagenes te identificas?',
        },
        analitico:{
            profile:'control', key:'analitico', value:null,
            label:'¿Soy analítico?',
        },
        imparcial:{
            profile:'control', key:'imparcial', value:null,
            label:'¿Soy imparcial?',
        },
        organizado:{
            profile:'control', key:'organizado', value:null,
            label:'¿Soy organizado?',
        },
        cuestionador:{
            profile:'control', key:'cuestionador', value:null,
            label:'¿Cuestiono todo?',
        },
        arriesgado:{
            profile:'dominancia', key:'arriesgado', value:null,
            label:'¿Soy arriesgado?',
        },
        creativo:{
            profile:'dominancia', key:'creativo', value:null,
            label:'¿Soy creativo?',
        },
        energico:{
            profile:'dominancia', key:'energico', value:null,
            label:'¿Con cual de las dos imagenes te identificas?',
        },
        ambicioso:{
            profile:'dominancia', key:'ambicioso', value:null,
            label:'¿Soy ambicioso?',
        },
        competitivo:{
            profile:'dominancia', key:'competitivo', value:null,
            label:'¿Soy competitivo?',
        },
        alegre:{
            profile:'influencia', key:'alegre', value:null,
            label:'¿Con cual de las dos imagenes te identificas?',
        },
        poetico:{
            profile:'influencia', key:'poetico', value:null,
            label:'¿Soy poético?',
        },
        amigable:{
            profile:'influencia', key:'amigable', value:null,
            label:'¿Soy amigable?',
        },
        popular:{
            profile:'influencia', key:'popular', value:null,
            label:'¿Soy popular?',
        },
        indeciso:{
            profile:'influencia', key:'indeciso', value:null,
            label:'¿Soy indeciso(a)?',
        },
        callado:{
            profile:'estabilidad', key:'callado', value:null,
            label:'¿Con cual de las dos imagenes te identificas?',
        },
        conciliador:{
            profile:'estabilidad', key:'conciliador', value:null,
            label:'¿Soy conciliador?',
        },
        pacifico:{
            profile:'estabilidad', key:'pacifico', value:null,
            label:'¿Soy pacifico?',
        },
        reflexivo:{
            profile:'estabilidad', key:'reflexivo', value:null,
            label:'¿Soy reflexivo?',
        },
        inexpresivo:{
            profile:'estabilidad', key:'inexpresivo', value:null,
            label:'¿Soy inexpresivo?',
        },
    },
    profiles:{
        dominancia:{
            name:"dominancia",
            alter:"control",
            label:"independiente-automotivado",
            points:0,
            color:'#FC004B',
        },
        control:{
            name:"control",
            alter:"dominancia",
            label:"analista-pensador",
            points:0,
            color:'#3002AF',
        },
        influencia:{
            name:"influencia",
            alter:"estabilidad",
            label:"promotor-amigable",
            points:0,
            color:'#FFCC00',
        },
        estabilidad:{
            name:"estabilidad",
            alter:"influencia",
            label:"planificador-perseverante",
            points:0,
            color:'#04E120',
        }
    },
};

export default function useTest(){
    const [ inputs, _reset ] = React.useState(Inputs);
    const setInputs = newObject=>_reset({...(Inputs=merge(Inputs, newObject))});
    const [step, setStep] = React.useState(0);
    const nextStep = ()=>setStep(p=>p+1);
    const prevStep = ()=>setStep(p=>(p<1?0:p-1));
    const hooks = {
        inputs,
        setInputs,
        step,
        setStep,
        prevStep,
        nextStep,
    };
    hooks.StepComponent = ({ steps=[], offset=0 })=>{
        if(step<offset || step>steps.length ) return null;
        const Component = steps[step-offset];
        const key = Component.prototype.constructor.name.toLowerCase().replace('step','');
        const Card = {
            ...inputs.cards[key],
            key,
            Component,
            yes:()=>setInputs({ cards:{ [key]:{value:true} } }),
            no:()=>setInputs({ cards:{ [key]:{value:false} } }),
            disabled:inputs.cards[key].value===null,
            checked:Boolean(inputs.cards[key].value),
        };
        return <Card.Component {...hooks} card={Card} />
    };
    return hooks;
}