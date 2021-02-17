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
    truncate:{
        width: 270,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    group:{
        fontSize: 20,
        right: 60,
        bottom: 0,
        top: 0,
        position: 'absolute',
        padding: 0,
        color: theme.palette.secondary.dark,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65
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
        width: 50,
        height: 50,
    },
    cardContainer:{
        flex: '1 1 auto'
    },
    perfil:{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        padding: '10px 20px',
        fontSize: 15,
        background: props => props?.color ? props.color : theme.palette.secondary.dark,
        borderRadius: '10px 0 0 0',
        color: '#fff'
    },
    newPerfil:{
        padding: '10px 20px',
        fontSize: 15,
        background: props => props?.color ? props.color : theme.palette.secondary.dark,
        borderRadius: '10px 0 0 0',
        color: '#fff'
    },
    textModal:{
        fontSize: 20,
    },
    body:{
        display: 'flex',
        width: '100%'
    }
}))