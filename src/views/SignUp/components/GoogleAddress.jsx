import React from 'react';
import throttle from 'lodash/throttle';
import { TextField, Grid, Typography, makeStyles, FormControl, FormHelperText, } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import parse from 'autosuggest-highlight/parse';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useForm from '~/views/SignUp/components/useForm';
import Google from '~/ServerLess/utils/Google';


const autocompleteService = { current: null };
const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));
export default function GoogleAdress() {
    const classes = useStyles();
    const { inputs, } = useForm();
    const [ options, setOptions ] = React.useState([]);
    const [ current, setCurrent ] = React.useState(inputs('address.value.string') || '');
    const fetch = React.useMemo(()=>throttle((request, callback) => {
      autocompleteService.current.getPlacePredictions(request, callback);
    }, 200),[],);
    React.useEffect(() => {
      let active = true;
      if (!autocompleteService.current){
        Google.ready(()=>(autocompleteService.current = new window.google.maps.places.AutocompleteService()));
        return undefined;
      }
      if (current === '') return setOptions([]);
      fetch({input:current},results=>(
        setOptions(([current]).concat(active&&results))
      ));
      return ()=>active=false;
    }, [current, fetch]);
    const handlerChange = async (e, value)=>{
      const desc = value?.description || value || '';
      inputs.address.value.string = desc;
      if(desc !== inputs.address.value.maps?.description)
        inputs.address.value.maps = value?.description && {
          description:value?.description, place_id:value?.place_id,
        };
      await setCurrent(inputs.address.value?.string);
    };

    return (<FormControl error={!!inputs.address.error} style={{maxWidth:'unset',width:'100%'}}>
        <FormHelperText> { inputs.address.error || 'Dirección de residencia: ' } </FormHelperText>
        <Autocomplete
            freeSolo
            autoComplete
            value={current}
            includeInputInList
            filterOptions={x=>x}
            filterSelectedOptions
            onChange={handlerChange}
            onInputChange={handlerChange}
            options={options.filter(e=>e?.description)}
            renderInput={(params)=>(<TextField error={!!inputs.address.error} placeholder="Cra. 20 #00-00, Bogotá, Colombia" {...params} variant="outlined" />)}
            getOptionLabel={(option)=>(typeof option==='string'?option:option.description)}
            renderOption={(option) => {
                if(!option || !option.structured_formatting) return null;
                const matches = option.structured_formatting.main_text_matched_substrings;
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match) => [match.offset, match.offset + match.length]),
                );
                return (<Grid container alignItems="center">
                  <Grid item> <LocationOnIcon className={classes.icon} /> </Grid>
                  <Grid item xs>
                      {parts.map((part, index) => (
                      <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                          {part.text}
                      </span>
                      ))}
                      <Typography variant="body2" color="textSecondary">
                      {option.structured_formatting.secondary_text}
                      </Typography>
                  </Grid>
                </Grid>);
            }}
        />
    </FormControl>);
}
