import { makeStyles } from '@material-ui/core';



export default makeStyles(theme=>({
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
            '& .MuiTypography-h3':{ color:'white', fontSize:20 },
            '& .MuiTypography-subtitle2':{ color:'inherit',fontSize:16, margin:'0px 0 auto 0',},
        },
    },
    body:{
        margin:'auto 0',
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between',
        '& > .MuiFormControl-root, & > .MuiGrid-root > .MuiFormControl-root':{
            width:'100%',
            maxWidth:'48%',
            marginBottom:10,
            '&.MuiFormControl-fullWidth, &:only-child':{ maxWidth:'unset', },
            [theme.breakpoints.down('xs')]:{
                fontWeight:300,
                maxWidth:'unset',
                margin:'20px auto 0 auto',
                '& > .MuiIconButton-root':{ color:'white',fontWeight:300 },
                '& .MuiFormHelperText-root:not(.Mui-error), & .MuiInputBase-root':{
                    color:'white',
                    fontWeight:'inherit',
                    '&:not(.Mui-error)':{ '& fieldset':{ borderColor:'white', }, },
                },
            },
        }
    },
    actions:{
        width:'100%',
        margin:'auto',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        '& .terms':{ flexGrow:1,marginBottom:10, },
        '& .MuiButton-root:first-child':{ margin:'0 10px 0 auto', },
        '& .MuiTypography-root':{ color:'#fff', fontSize:'1.3em', fontWeight:'lighter', textTransform:'none',},
        [theme.breakpoints.down('xs')]:{
            marginTop:20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            '& .terms':{ flexBasis:'100%', },
            '& .MuiButton-root:first-child':{ margin:0, },
        },
    },
}));