import { makeStyles } from '@material-ui/core';

export const useStylesSingUp = makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100%',
        display:'flex',
        padding:'0px 50px',
        flexDirection:'column',
        '& .MuiToolbar-root':{ justifyContent:'center', },
    },
    header:{
        margin:'auto 0',
        '& .MuiTypography-h3':{ fontSize:'2.2rem', },
        '& .MuiTypography-subtitle2':{ fontSize:'1.3rem', margin:'20px 0 10px 0', },
        [theme.breakpoints.down('xs')]:{
            color:'white',
            margin:'90px 0 0',
            '& .MuiTypography-h3':{ _display:'none', color:'white', fontSize:20 },
            '& .MuiTypography-subtitle2':{ color:'inherit',fontSize:16, margin:'0px 0 auto 0',},
        },
    },
    body:{
        margin:'auto',
        alignItems:'center',
        '& .MuiFormControl-fullWidth':{
            width: '100% !important'
        },
        '& [role="tabpanel"]:not([hidden])':{
            display:'flex',
            flexWrap:'wrap',
            '& .MuiFormControl-root':{
                width:'100% !important',
                maxWidth:'45%',
                marginBottom:20,
                '&:nth-child(odd)':{ marginRight:'auto', },
                '&:only-child':{ width:'100% !important', maxWidth:'99%', margin:'auto', },
            },
            '& > .legend':{
                flexGrow: 1,
                marginTop:20,
                display: 'flex',
                alignItems: 'center',
                '& > .MuiCheckbox-root':{ padding:0,marginRight:10, },
            },
            [theme.breakpoints.down('xs')]:{
                '& .MuiIconButton-root':{ color:'white',fontWeight:300 },
                '& .MuiFormControl-root':{
                    width:'100%',
                    fontWeight:300,
                    maxWidth:'unset',
                    '& .MuiInputBase-root, & label, & input, & .MuiFormHelperText-root':{color:'inherit',fontWeight:'inherit'},
                    '& fieldset':{ borderColor:'white', },
                    '& + .legend':{ margin:'5px auto'},
                },
                '& > .legend':{ display:'block', marginTop:30, },
            },
        },
    },
    actions:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        '& .terms':{ flexGrow:1,marginBottom:10, },
        '& .MuiButton-root':{ marginLeft:'auto', },
        '& .MuiTypography-root':{ color:'#fff', fontSize:'1.3em', fontWeight:'lighter', textTransform:'none',},
        [theme.breakpoints.down('xs')]:{ flexDirection:'column', },
    },
}));
