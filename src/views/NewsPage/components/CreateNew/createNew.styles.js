import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useCardStyles = makeStyles((theme) => ({
    root: {
      minWidth: '30vw',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 25
    },
    input: {
      width: '100%',
     

    },
    avatar: {
      backgroundColor: red[500],
    },
    actions: {
        justifyContent: 'space-between'
    }
  }));