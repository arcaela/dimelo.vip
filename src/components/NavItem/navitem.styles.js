import { makeStyles } from '@material-ui/core/styles';

export const navStyles = makeStyles((theme) => ({
    list:{
        background: props => props.active ? '#82D827' : '',
        '&:hover':{
            background: '#82D827'
        }
    },
    text:{
        color: '#fff'
    }
}))