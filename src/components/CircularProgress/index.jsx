import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import _CircularProgress from '@material-ui/core/CircularProgress';




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
  }))(function CircularProgress(attrs) {
    const { classes, ...props } = attrs;
    return (
      <div className={classes.root}>
        <_CircularProgress size={40} thickness={2} className={classes.bottom} {...props} value={100} />
      </div>
    );
  });