import React, { useState } from 'react';
import { 
    Avatar, 
    Button, 
    Popover,
    Card,
    CardContent,
    makeStyles,
    Hidden
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { api } from '~/ServerLess';
import { Link } from 'react-router-dom';
import usePatron from '~/hooks/usePatron';

const styles = makeStyles((theme)=>({
  root:{
    '& .MuiPopover-paper':{background:'none'}
  },
  card:{
    minWidth: 300,
    background:theme.palette.primary.dark,
  },
  cardContent:{
    color:'white',
    display:'flex',
    ' & > *':{margin:'0 0 10px 0'},
    alignItems:'center',
    flexDirection:'column',
  },
  buttons:{
    '& > .MuiButton-root':{
      color:'white',
      '&:last-child':{ marginLeft:10, },
    },
  },
  large: {
    width: '120px',
    height: '120px',
  }
}))


export default function ButtonProfile({ auth }){
  const classes = styles()
  const [anchorEl, setAnchorEl] = useState(null);
  const { label, color } = usePatron(auth?.patron)
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const signOut = () =>api('auth/signout').then(()=>window.location.replace('/')).catch(e=>alert(e))
  return (
    <div className={classes.root}> 
      <Button aria-describedby={id} onClick={handleClick} aria-haspopup='true'>
        <Hidden smDown>
          <span>
            { !auth ? <Skeleton width={120} height={40} variant="text" /> : auth?.fullname }
          </span>&nbsp;
        </Hidden>

        {!auth ? <Skeleton variant="circle" width={40} height={40} /> : auth?.photoURL ? 
          <><Avatar className={classes.large} alt={auth?.email} src={auth?.photoURL} /></> 
          :
          <><Avatar className={classes.large} children={auth?.fullname[0]} /></>
        }
      </Button>
      {auth && <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
        transformOrigin={{ vertical: 'top', horizontal: 'right', }} >
          <Card className={ classes.card }>
            <CardContent className={classes.cardContent}>
              {auth?.photoURL ? 
              <><Avatar className={classes.large} alt={auth?.email} src={auth?.photoURL} /></> 
              :
              <><Avatar children={auth?.fullname[0]} /></>}

              <h3 className={ classes.tile }>{ auth?.fullname }</h3>
              <h4 className={ classes.subtitle }>{ auth?.email }</h4>
              {label && <h4 
              style={{
                background: color,
                padding: '.45rem',
                borderRadius: '4px'
              }}
              className={ `${classes.subtitle}` }>
                { label }
              </h4>}
              <div className={ classes.buttons } >
                <Button component={Link}
                  to="/account"
                  disableElevation size="small"
                  color="secondary"
                  variant="outlined">Mi cuenta</Button>
                <Button onClick={ signOut }
                  color="secondary"
                  disableElevation size="small"
                  variant="contained" >Cerrar Sesión</Button>
              </div>
            </CardContent>
          </Card>
      </Popover>}
    </div>
  );
}