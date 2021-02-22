import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';




export default withStyles((theme) => ({
    root: { position: 'relative', },
    circle: { strokeLinecap: 'round', },
    bottom: { color: theme.palette.secondary.dark, },
    top: {
        left: 0,
        position: 'absolute',
        animationDuration: '1000ms',
        color: theme.palette.secondary.light,
    },
  }))(attrs=>{
    const { classes, ...props } = attrs;
    return (
      <div className={classes.root}>
        <CircularProgress size={40} thickness={2} className={classes.bottom} {...props} value={100} />
      </div>
    );
  });