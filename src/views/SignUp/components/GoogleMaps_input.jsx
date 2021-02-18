import React from 'react';
import throttle from 'lodash/throttle';
import { TextField, Grid, Typography, makeStyles, FormControl, FormHelperText, } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import parse from 'autosuggest-highlight/parse';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useInput from '~/ServerLess/Hooks/useInput';

function loadScript(src, position, id) {
  if (!position) return;
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };
const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

export default function GoogleMaps({ onChange=(()=>{}), defaultValue='Colombia, Medellin' }) {
    const classes = useStyles();
    const { inputs, } = useInput();
    const loaded = React.useRef(false); 
    const [ options, setOptions ] = React.useState(defaultValue?[defaultValue]:[]);
    const [ inputValue, setInputValue ] = React.useState(defaultValue);
    if (typeof window !== 'undefined' && !loaded.current) {
      if (!document.querySelector('#google-maps'))
        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBntYCJH39TRORGUSYpYHHrcg4Etk8Y208&libraries=places',
          document.querySelector('head'),
          'google-maps');
      loaded.current=true;
    }
    const fetch = React.useMemo(()=>throttle((request, callback) => {
      autocompleteService.current.getPlacePredictions(request, callback);
    }, 200),[],);
    React.useEffect(() => {
      let active = true;
      if (!autocompleteService.current && window.google)
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
      if (!autocompleteService.current) return undefined;
      if (inputValue === '') return setOptions([]);
      fetch({input:inputValue},results=>(
        active&&setOptions(results||[])
      ));
      return ()=>active=false;
    }, [inputValue, fetch]);
    return (<FormControl error={inputs.address.error} style={{maxWidth:'unset',width:'100%'}}>
        <FormHelperText> { inputs.address.error || 'Dirección de residencia: ' } </FormHelperText>
        <Autocomplete
            freeSolo
            autoComplete
            options={options}
            includeInputInList
            filterOptions={x=>x}
            filterSelectedOptions
            id="google-map-address"
            defaultValue={defaultValue}
            onInputChange={async (e,newInputValue)=>{
              await setInputValue(newInputValue);
              return onChange(e,newInputValue);
            }}
            onChange={(e,o)=>onChange(e,o)}
            renderInput={(params)=>(<TextField {...params} variant="outlined" />)}
            getOptionLabel={(option)=>(typeof option==='string'?option:option.description)}
            renderOption={(option) => {
                if(!option) return null;
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
