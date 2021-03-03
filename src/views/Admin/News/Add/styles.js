import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  form: {
    marginBottom: 30,
    marginTop: 50,
  },
  formControl: {
    width: '100%',
  },
  goBack: {
    '& a':{ textDecoration:'none', color: theme.palette.primary.dark },
  },
  button: {
    background: theme.palette.primary.dark,
    borderRadius: 4,
    padding: 8.5,
    color: '#fff',
    '&:hover':{
        background: theme.palette.primary.dark,
    }
  },
  chips: {
    '& .MuiChip-root': {
      backgroundColor: '#82D827',
      color: '#FFF',
    },
    '& .MuiChip-deleteIcon': {
      'color': '#FFF',
    }
  },
  input: {
   display: 'none',
  },
  rightCard: {
    '& .MuiTypography-root':{ cursor:'default' },
    '& .MuiTypography-subtitle1':{
      fontSize:'1.1rem',
      font: 'normal normal bold 20px/20px Source Sans Pro',
      letterSpacing: '0.4px',
      color: '#4D4F5C',
      opacity: 1,
      fontWeight:600,
      margin: '20px',
    },
    '& .MuiTypography-subtitle2':{
      fontSize:'1.2rem',
      font: 'normal normal 900 20px/25px Source Sans Pro',
      color: '#1C4F75',
      opacity: 1,
      fontWeight:600,
      marginLeft: '20px',
    },
    '& .MuiTypography-body1': {
      fontSize:'0.9rem',
      font: 'normal normal 300 18px/23px Source Sans Pro',
      color:'#4D4F5C',
      opacity: '0.6',
      margin:'20px 20px 20px 0px'
    },
  }
}));
