import { makeStyles } from '@material-ui/core/styles';

export const useCardLider = makeStyles((theme) => ({
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        '&:focus':{
            outline: 'none'
        }
    },
    avatarContainer:{
        padding: 16,
        paddingRight: 0
    },
    pRelative:{
        position: 'relative',
        width: '100%'
    },
    pr:{
        position: 'relative',
    },
    group:{
        fontSize: 20,
        right: 0,
        bottom: 0,
        position: 'absolute',
        padding: 24,
        color: theme.palette.secondary.dark,
        cursor: 'pointer',
        display: 'flex'
    },
    icon:{
        fontSize: 22,
        marginRight: 10
    },
    iconContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    textModal:{
        fontSize: 20,
    }
}))