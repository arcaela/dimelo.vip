import { makeStyles } from '@material-ui/core/styles';

export const useCardRed = makeStyles((theme) => ({
    container:{
        display: 'flex'
    },
    avatarContainer:{
        padding: 16
    },
    pRelative:{
        position: 'relative'
    },
    actionsHeader:{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '13px',
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    cardContainer:{
        flex: '1 1 auto'
    },
    perfil:{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        padding: 20,
        fontSize: 15,
        background: '#04E120',
        borderRadius: '10px 0 0 0',
        color: '#fff'
    }
}))