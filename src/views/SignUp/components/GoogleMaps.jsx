import React from 'react'
import CircularProgress from '~/components/CircularProgress';
import Google from '~/ServerLess/utils/Google';



let _Options = {
    zoom:6,
    disableDefaultUI: true,
    center:{ lat:3.766332624589893, lng:-73.35011677653883, },
};
window.navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
    _Options.center = {lat:latitude,lng:longitude};
    _Options.zoom = 14;
});


export default function GoogleMaps({ onChange }){
    const Marker = React.useRef(null);
    const Geocoder = React.useRef(null);
    const Viewport = React.useRef(null);
    const [ Maps, setMaps ] = React.useState(null);
    let [ options, setOptions ] = React.useState(_Options);
    React.useEffect(()=>{
        if(!Maps){
            Marker.current=null;
            Google.ready(google=>{
                if(!Viewport.current || Maps) return;
                const map = new google.maps.Map(Viewport.current, options);
                Geocoder.current = new google.maps.Geocoder();
                Marker.current = new google.maps.Marker({ position: options.center, });
                map.addListener('click', async event=>{
                    const position = event.latLng.toJSON();
                    await Marker.current.setOptions({map,position});
                    if(onChange) onChange(event);
                });
                setMaps(map);
            });
        }
        return ()=>{};
    }, [ options, setOptions, Maps, setMaps, onChange ]);
    return (<div style={{ width:'100%', margin:'20px auto',textAlign:'center', position:'relative', height:!Maps?0:'calc(100vh - 300px)', }}>
        { !Maps && <CircularProgress /> }
        <div style={{ top:0, left:0, width:'100%', height:'100%', borderRadius:10, position:'absolute', }} ref={Viewport} />
    </div>);
}