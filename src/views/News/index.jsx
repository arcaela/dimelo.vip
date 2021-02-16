import React from "react";
import { CircularProgress, Container, makeStyles } from "@material-ui/core";
import Layout from "../layout";
import NewsBox from "./NewsBox";


const useStyles = makeStyles(()=>({


    loading:{
        padding:'10px 0',
        textAlign:'center',
    },
}));


export default function NewsPage(){
    const classes = useStyles();
    const [ posts ] = React.useState([
        {
            id:1103,
            autor:{ uid:'m9Io8z0RGd_okPRG6Z1DwxYyvYk', name:'Alejandro Reyes', },
            timestamp:Date.now(),
            title:'Real Madrid v.s. Barcelona F.C',
            content:`Hasta 1999 los encuentros eran emitidos por televisión en abierto para todo el país sin atender al carácter del evento.
                Desde entonces, y hasta 2012, estos partidos fueron perdiendo paulatinamente tal privilegio debido a la aparición en escena del sistema de pago por visión y los nuevos derechos audiovisuales en España, por lo que pasaron a ser de emisión privada, en un primer paso, para más tarde potenciarse la emisión codificada.
                Desde el año 2012, solo se emiten en abierto por imperativo legal los partidos que dilucidan algún título o eliminatoria de gran consideración de interés público.`,
            media:[
                'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/02/29/15830000481096.png',
                // 'https://depor.com/resizer/m9Io8z0RGd_okPRG6Z1DwxYyvYk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ACWYRTGFUBHDLPNVXNWDHJUJ4I.jpg',
                // 'https://as01.epimg.net/futbol/imagenes/2016/04/02/primera/1459592248_359671_1459628973_noticia_normal.jpg',
                // 'https://elbocon.pe/resizer/7StjIGJ8IedqB8fIMbk-q7YYRcg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZLNV2BFXUVCNBLILBGM7MDHU2I.png',
                // 'https://cdn.futbolperuano.com/sdi/2020/03/01/real-madrid-vs-barcelona-en-vivo-online-por-la-jornada-26-de-laliga-815198.gif',
            ],
            likes:{ counts:12, me:false, },
        }
    ]);
    const [ loading ] = React.useState(true);
    return (<Layout middleware={['auth']}>
        <Container maxWidth="sm" children={posts.map((post,key)=><NewsBox {...post} key={key}/>)} />
        {loading&&(<div className={ classes.loading } children={<CircularProgress size={25} />} />)}
    </Layout>);
}