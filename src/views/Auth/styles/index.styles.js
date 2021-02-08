import { makeStyles } from '@material-ui/core';

import WatermarkIMG from '../../../dist/images/watermark.svg';
import WatermarkDarkIMG from '../../../dist/images/watermark-dark.svg';
import BrandIMG from '../../../dist/images/brand.svg';

export const useStylesIndex = makeStyles(theme=>({
    root:{ minHeight:'100vh', },
    gridLeft:{
        padding:'100px 83px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'250px, 520px',
        backgroundColor:theme.palette.primary.main,
        backgroundImage:`url(${BrandIMG}), url(${WatermarkIMG})`,
        backgroundPosition:'bottom 30px right 30px, left bottom',
        '& .MuiTypography-root':{ color:'#fff', cursor:'default', },
        '& .MuiTypography-h3':{ font:'normal normal bold 50px/71px Source Sans Pro', },
        '& .MuiTypography-subtitle2':{ font:'normal normal 300 20px/25px Source Sans Pro', },
    },
    gridRight:{
        cursor:'default',
        fontWeight:'300',
        '& a':{ textDecoration:'none',color:'inherit' },
        '& > .MuiContainer-root':{ height:'100%', display:'flex', flexDirection:'column', },
        [theme.breakpoints.down('xs')]:{
            color:'white',    
            backgroundRepeat:'no-repeat',
            backgroundSize:'250px, 300px',
            backgroundColor:theme.palette.primary.main,
            backgroundImage:`url(${BrandIMG}), url(${WatermarkDarkIMG})`,
            backgroundPosition:'top 20px center, left bottom',
        },
    },
}));