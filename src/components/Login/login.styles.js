import { makeStyles } from '@material-ui/core/styles';

export const loginStyles = makeStyles((theme) => ({
    container:{
        maxWidth: '400px',
        padding: 15
    },
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 40,
        color: theme.palette.primary.main
    },
    formControl:{
        width: '100%',
        marginBottom: 25
    },
    button:{
        background: theme.palette.secondary.dark,
        color: '#fff',
        '&:hover':{
            background: theme.palette.secondary.dark
        }
    },
    ps:{
        display: 'flex',
        flexDirection: 'revert',
        justifyContent: 'space-between'
    },
    p:{
        padding: 9,
        fontSize: '1rem',
        fontFamily: 'Source Sans Pro',
        fontWeight: 'bold',
        lineHeight: 1.5,
    }
}))