import { InputBase } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';


export const useContainer = makeStyles(theme=>({
    root:{
        display: 'flex'
    },
    container:{
        display: 'flex',
        alignItems: 'center',
    },
    select:{
        '& .MuiSelect-icon':{
            color: '#fff !important'
        }
    },
    button:{
        background: theme.palette.primary.dark,
        borderRadius: 4,
        padding: 8.5,
        color: '#fff',
        '&:hover':{
            background: theme.palette.primary.dark,
        }
    },
    buttonContainer:{
        marginLeft: 20
    }
}))

export const CustomImput = withStyles((theme) => ({
    input: {
        borderRadius: '4px 0 0 4px',
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${ theme.palette.primary.dark }`,
        borderLeft: `1px solid ${ theme.palette.primary.dark }`,
        borderBottom: `1px solid ${ theme.palette.primary.dark }`,
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: 'Source Sans Pro',
        '&:focus': {
            borderRadius: '4px 0 0 4px',
            borderColor: theme.palette.primary.dark,
            boxShadow: 'none',
        },
    },
}))(InputBase);

export const CustomSelectImput = withStyles((theme) => ({
    input: {
        borderRadius: '0 4px 4px 0',
        position: 'relative',
        color: '#fff',
        backgroundColor: theme.palette.primary.dark ,
        borderTop: `1px solid ${ theme.palette.primary.dark }`,
        borderLeft: `1px solid ${ theme.palette.primary.dark }`,
        borderBottom: `1px solid ${ theme.palette.primary.dark }`,
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: 'Source Sans Pro',
        '&:focus': {
            borderRadius: '0 4px 4px 0',
            borderColor: theme.palette.primary.dark,
            boxShadow: 'none',
            backgroundColor: theme.palette.primary.dark ,
        },
    },
}))(InputBase);