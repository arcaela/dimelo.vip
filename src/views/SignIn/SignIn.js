import BrandIMG from '~/images/brand.svg';
import { makeStyles } from '@material-ui/core';
import WatermarkIMG from '~/images/watermark.svg';

export default makeStyles(theme=>({
    $root:{ minHeight:'100vh', },
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
        [theme.breakpoints.down('sm')]:{ display:'none', },
    },
    gridRight:{
        cursor:'default',
        fontWeight:300,
        '& a':{ textDecoration:'none',color:'inherit' },
        '& > .MuiContainer-root':{ height:'100%', display:'flex', flexDirection:'column', },
        [theme.breakpoints.down('xs')]:{
            backgroundRepeat:'no-repeat',
            backgroundSize:'250px, 300px',
            backgroundImage:`url(${BrandIMG})`,
            backgroundPosition:'top 20px center',
        },
    },
    root:{
        width:'100%',
        height:'100%',
        display:'flex',
        padding:'0 50px',
        flexDirection:'column',
        '& .MuiToolbar-root':{ justifyContent:'center', },
    },
    header:{
        margin:'auto 0',
        '& .MuiTypography-h3':{ fontSize:'2.2rem', },
        '& .MuiTypography-subtitle2':{ fontSize:'1.3rem', margin:'20px 0 10px 0', },
        [theme.breakpoints.down('xs')]:{
            margin:'100px 0 0 0',
            '& .MuiTypography-h3':{ fontSize:20 },
            '& .MuiTypography-subtitle2':{ fontSize:16, margin:'0px 0 auto 0',},
        },
    },
    body:{
        maxWidth:400,
        margin:'auto',
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between',
        '& > .MuiFormControl-root':{
            width:'100%',
            maxWidth:'48%',
            fontWeight:100,
            marginBottom:10,
            '&.MuiFormControl-fullWidth, &:only-child':{ maxWidth:'unset', },
        },
        [theme.breakpoints.down('xs')]:{
            '& > .MuiButton-root.Mui-disabled':{
                backgroundColor:theme.palette.primary.main,
            },
            '& > .MuiFormControl-root, & > .MuiButton-root':{
                fontWeight:300,
                maxWidth:'unset',
                margin:'0 auto 10px auto',
                '&, &:only-child':{ maxWidth:'unset', margin:'20px auto 0 auto', },
            },
        },
    },
}));