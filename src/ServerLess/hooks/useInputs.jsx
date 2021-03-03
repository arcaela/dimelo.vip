import React from 'react'
import { merge } from 'lodash'
import { useGetter } from '~/ServerLess'

export default function useInputs(_ob_, _configs){
    const [ $inputs, $setInputs ] = React.useState( _ob_ );
    const inputs = useGetter($inputs,_configs);
    const setInput = (key,value)=>setInputs({[key]:value});
    const setInputs = (_value_)=>{
        const value = merge(_ob_, inputs, _value_);
        _configs.onUpdate(value);
        return $setInputs(value);
    };
    return { inputs, setInput, setInputs, };
}
