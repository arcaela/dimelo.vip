import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useCardStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 450,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 25
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
    actions: {
        justifyContent: 'space-between'
    }
  }));