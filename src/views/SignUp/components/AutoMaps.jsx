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

export default function GoogleMaps({ onChange=(()=>{}) }) {
    const classes = useStyles();
    const { inputs, } = useForm();
    const [ options, setOptions ] = React.useState([]);
    const [ inputValue, setInputValue ] = React.useState(inputs('address.value.string') || '');
    const fetch = React.useMemo(()=>throttle((request, callback) => {
      autocompleteService.current.getPlacePredictions(request, callback);
    }, 200),[],);

    React.useEffect(() => {
      let active = true;
      if (!autocompleteService.current){
        Google.ready(google=>{
          autocompleteService.current = new window.google.maps.places.AutocompleteService();
        });
        return undefined;
      }
      if (inputValue === '') return setOptions([]);
      fetch({input:inputValue},results=>{
        if (active && results?.length)
          setOptions(([inputs.address.value?.string]).concat(results));
      });
      return ()=>active=false;
    }, [inputValue, fetch]);
    return (<FormControl error={!!inputs.address.error} style={{maxWidth:'unset',width:'100%'}}>
        <FormHelperText> { inputs.address.error || 'Dirección de residencia: ' } </FormHelperText>
        <Autocomplete
            freeSolo
            autoComplete
            options={options}
            includeInputInList
            filterOptions={x=>x}
            filterSelectedOptions
            id="google-map-address"
            value={inputValue}
            onInputChange={async (e,newValue)=>{
              inputs.address.value = {string:newValue,
                ...(inputs.address.value.maps?.description!==newValue&&{maps:{}}),
              };
              await setInputValue(inputs.address.value?.string);
            }}
            onChange={async (e,{description,place_id})=>{
              inputs.address.value = { string:description, maps:{ description, place_id, }, };
              return await setInputValue(inputs.address.value.string);
            }}
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
