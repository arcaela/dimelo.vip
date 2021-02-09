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

export default function MapGetLocation({ 
    openModel, 
    setOpenModal, 
    location = { lat: 4.570868, lng: -74.297333 },
    setInput
}) {

    const refDiv = useRef();

    const modal = modalStyle();

    const centerModal = getModalStyle();

    const classes = useStyles();



    useEffect(() => {

        const setMAp = async () => {
            if(openModel){
                const loader = new Loader('AIzaSyBntYCJH39TRORGUSYpYHHrcg4Etk8Y208', options);
    
                const google = await loader.load();

                const geocoder = new google.maps.Geocoder();
        
                const map = new google.maps.Map(refDiv.current, {
                    center: location,
                    zoom: 13
                });

                google.maps.event.addListener(map, "click", (event) => {

                    const data = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                    };

                    console.log( data );

                    new google.maps.Marker({
                        position: event.latLng,
                        map: map,
                    });

                    geocoder.geocode({ 
                        location: data
                    }, (results, status) => {
                        if (status === "OK" && results[0]) {
                            setInput('direccion', { coords : data, value : results[0].formatted_address })
                        } else {
                        }
                      });
                    
                    setTimeout( () => { setOpenModal(!openModel) }, 1500 );

                });


            }
        }

        setMAp();

    }, [openModel]);

    return ( 
        <Modal
        open={openModel}
        >
            <div style={ centerModal } className={ classes.paper }>
                <div className={ modal.map } ref={ refDiv }></div>
            </div>
        </Modal>
    )
}
