import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


export const useNavBarRed = makeStyles((theme) => ({
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 50,
        marginTop: 50
    },
    noShadow:{
        boxShadow: 'none',
        height: 39,
        '&:hover':{
            boxShadow: 'none'
        }
    },
    search:{
        display: 'flex'
    },
    mr:{
        marginRight: 15
    }
}))

export const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: '#EFEFEF',
      border: 'none',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: 'none',
        outline: 'none !important'
      },
    },
  }))(InputBase);


export const BootstrapSelect = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius:' 0 4px 4px 0',
      color: '#fff',
      position: 'relative',
      backgroundColor: theme.palette.primary.main,
      border: 'none',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderColor: theme.palette.primary.main,
        boxShadow: 'none',
      },
    },
  }))(InputBase);