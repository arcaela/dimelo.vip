import React, { useRef, useEffect, useState } from 'react'
import { Loader } from 'google-maps';
import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';


const modalStyle = makeStyles(theme=>({
    map:{
        height:500,
    }
}));


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      maxWidth: 500,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const options = {};

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

export default function MapGetLocation() {

    const refDiv = useRef();

    const modal = modalStyle();

    const centerModal = getModalStyle();

    const classes = useStyles();

    const [open, setOpen] = useState(true);

    useEffect(() => {

        const setMAp = async () => {
            if(open){
                const loader = new Loader('AIzaSyBntYCJH39TRORGUSYpYHHrcg4Etk8Y208', options);
    
                const google = await loader.load();

                const geocoder = new google.maps.Geocoder();
        
                const map = new google.maps.Map(refDiv.current, {

                    center: { lat: 4.570868, lng: -74.297333 },
                    zoom: 13,        

                });

                google.maps.event.addListener(map, "click", (event) => {

                    const latlng = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                    };

                    console.log( latlng );

                    new google.maps.Marker({
                        position: event.latLng,
                        map: map,
                    });

                    geocoder.geocode({ 
                        location: latlng
                    }, (results, status) => {
                        if (status === "OK" && results[0]) {
                            console.log(results[0].formatted_address);
                        } else {
                        }
                      });
                    


                    setTimeout(() => {
                        setOpen(!open)
                    }, 3000);


                });


            }
        }

        setMAp();

    }, [open]);

    return ( 
        <Modal
        open={open}
        >
            <div style={ centerModal } className={ classes.paper }>
                <div className={ modal.map } ref={ refDiv }></div>
            </div>
        </Modal>
    )
}
