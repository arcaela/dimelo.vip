import { makeStyles } from '@material-ui/core';

import WatermarkDarkIMG from '../../../images/watermark-dark.svg';

export const useStylesSingUpMore = makeStyles(theme=>({
    root:{
        display:'flex',
        minHeight:'100vh',
        backgroundSize:200,
        backgroundRepeat:'space',
        backgroundColor:`${theme.palette.primary.dark}`,
        backgroundImage:`url(${WatermarkDarkIMG})`,
        '& a':{textDecoration:'none', color:'inherit'},
    },
    container:{
        color:'#FFF',
        display:'flex',
        borderRadius:20,
        margin:'20px auto',
        padding:'0 50px',
        flexDirection:'column',
        justifyContent:'flex-start',
        backgroundColor:theme.palette.primary.main,
        '& > img':{ maxWidth:200, margin:'30px auto 0', },
        [theme.breakpoints.down('xs')]:{
            backgroundColor:'transparent',
            '& > img':{ margin:'0 auto', },
        },
    },
    w100:{
        '& .MuiFormControl-fullWidth':{ width: '100% !important' }
    },
    header:{
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        margin:'30px 0 auto',
        '& .MuiTypography-h5':{ fontSize:'1.5rem',flexGrow:1, },
        '& > span':{ textDecoration:'underline', fontWeight:100, cursor:'pointer',},
        '& .MuiTypography-subtitle2':{ minWidth:'100%',marginTop:10, fontSize:'1rem', fontWeight:'300', },
    },
    body:{
        margin:'auto',
        alignItems:'center',
        '& [role="tabpanel"]:not([hidden])':{
            display:'flex',
            flexWrap:'wrap',
            '& > .MuiFormControl-root':{
                width:250,
                maxWidth:'45%',
                marginBottom:20,
                '& .MuiInputBase-root:not(.Mui-error) fieldset':{ borderColor:'white', },
                '&:nth-child(odd)':{ marginRight:'auto', },
                '&:only-child':{ width:250, maxWidth:'99%', margin:'auto', },
            },
            '& .MuiIconButton-root':{ color:'white',fontWeight:100 },
            ['& .MuiInputBase-root ,& label ,& input'
            +',& .MuiFormHelperText-root:not(.Mui-error)']:{
                color:'inherit',
                fontWeight:100,
            },
            '&:last-child':{
                display:'block',
                '& .MuiFormControl-root':{
                    width:'100%',
                    fontWeight:100,
                    maxWidth:'unset',
                    '& label':{
                        fontSize:'.9rem',
                    },
                },
            },
            [theme.breakpoints.down('xs')]:{
                '& .MuiFormControl-root':{
                    width:'100%',
                    fontWeight:100,
                    maxWidth:'unset',
                },
            },
        },
    },
    actions:{
        display:'flex',
        textAlign:'center',
        marginTop:'auto',
        flexDirection:'column',
        '& .MuiButton-root':{ color:'#fff', marginLeft:'auto', },
        '& .MuiButton-containedPrimary':{backgroundColor:'#1c4f75',},
        '& .MuiSvgIcon-root':{ fontSize:15, },
        '& > .active-step-3':{ '& .MuiSvgIcon-root:nth-child(1)':{color:theme.palette.secondary.main} },
        '& > .active-step-4':{ '& .MuiSvgIcon-root:nth-child(2)':{color:theme.palette.secondary.main} },
        '& > .active-step-5':{ '& .MuiSvgIcon-root:nth-child(3)':{color:theme.palette.secondary.main} },
    },
    welcome:{
        margin:'auto',
        color:'#FFF',
        borderRadius:20,
        padding:'20px',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        backgroundColor:theme.palette.primary.main,
        '& > img':{ maxWidth:200, margin:'0 auto', marginTop:30, },
        '& > .MuiTypography-h5':{ margin:'20px auto', },
        '& > .MuiButton-root':{ margin:'40px auto',color:'#fff' },
        '& > .MuiTypography-subtitle2':{ },
    },
    footer:{
        width:'100%',
        fontWeight:'300',
        justifyContent:'center',
    },
}));