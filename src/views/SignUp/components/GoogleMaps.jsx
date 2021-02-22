import React from 'react'
import CircularProgress from '~/components/CircularProgress';




if(!document.getElementById('google-maps-api')){
    const script = document.createElement('script')
    script.setAttribute('async', '');
    script.setAttribute('id', 'google-maps-api');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBntYCJH39TRORGUSYpYHHrcg4Etk8Y208&libraries=&callback=googleReady';
    document.querySelector('head').appendChild(script);
}
export const Google = {
    promise:new Promise(()=>{}),
    on(e,c){ return this[e](c); },
    ready(callback){ return this.promise.then(callback); },
    options:{
        zoom:4,
        disableDefaultUI: true,
        center:{ lat:3.766332624589893, lng:-73.35011677653883, },
    },
};
window.googleReady = ()=>Google.resolve(Google.__=window.google);
Google.promise = new Promise((s,e)=>{ Google.resolve=s; Google.reject=e; });
window.navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
    Google.options={...Google.options,...{zoom:15, center:{lat:latitude,lng:longitude}}};
});



export default function GoogleMaps({ onChange }){
    const Marker = React.useRef(null);
    const Viewport = React.useRef(null);
    const [ Maps, setMaps ] = React.useState(null);
    React.useEffect(()=>{
        if(!Maps){
            Marker.current=null;
            Google.ready(async google=>{
                if(Viewport.current&&!Maps){
                    const map = new google.maps.Map(Viewport.current, Google.options);
                    Marker.current = new google.maps.Marker({
                        position: Google.options.center,
                    });
                    await setMaps(map);
                }
            });
        }
        else{
            Maps.addListener('click',async event=>{
                if(Marker.current){
                    await Marker.current.setOptions({
                        map:Maps,
                        position:event.latLng.toJSON(),
                    });
                    if(onChange) onChange(event);
                }
            });
        }
        return ()=>{};
    },[Maps, setMaps]);
    return (<div style={{ width:'100%', margin:'20px auto',textAlign:'center', position:'relative', height:!Maps?0:'calc(100vh - 300px)', }}>
        { !Maps && <CircularProgress /> }
        <div style={{ top:0, left:0, width:'100%', height:'100%', borderRadius:10, position:'absolute', }} ref={Viewport} />
    </div>)
}