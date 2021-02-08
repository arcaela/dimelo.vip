import { makeStyles } from '@material-ui/core/styles';

export const useResultPage = makeStyles( (theme) => ({
    container:{
        maxWidth: '400px',
        margin: 'auto',
        '& img':{
            maxWidth: '100%',
            height: 'auto'
        }
    },
    title:{
        color: theme.palette.primary.main,
        fontSize: '25px'
    },
    p:{
        color: theme.palette.primary.main,
        fontSize: '18px',
        fontWeight: '500'
    },
    subtitle:{
        color: theme.palette.primary.main,
        fontSize: '20px',
        marginBottom: '10px'
    },
    perfil:{
        color: theme.palette.primary.main,
        fontSize: '20px'
    },
    h5:{
        fontSize: '18px',
        fontWeight: '500',
        marginTop: '0'
    },
    patron : {
        color: '#fff',
        padding: '.3rem 2rem',
        borderRadius: '10px 0px'
    },
    dominancia: {
        background: '#FC004B'
    }

}))