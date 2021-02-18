import React from 'react'




function loadScript(src, position, id) {
    if (!position) return;
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

if (!document.querySelector('#google-maps')){
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBntYCJH39TRORGUSYpYHHrcg4Etk8Y208&libraries=',document.querySelector('head'),'google-maps');
}




export default function GoogleMaps(){
    const MapsViewport = React.useRef(null);
    const [ Maps, setMaps ] = React.useState(null);
    React.useEffect(() => {
        let active = true;
        if(window.google && MapsViewport.current && !Maps){
            if(active)
                setMaps(new window.google.maps.Map(MapsViewport.current, {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 8,
                }));
        }
        return ()=>active=false;
    }, [ Maps, setMaps ]);
    return <div ref={MapsViewport} />;
}