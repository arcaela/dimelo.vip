import React, { useState } from 'react';
import { 
    Avatar, 
    Button, 
    Popover,
    Card,
    CardContent,
    makeStyles
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import useAuth from '../../ServerLess/Hooks/useAuth';

import api from '../../ServerLess/api';
import { Link } from 'react-router-dom';

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
  }
}))




export default function ButtonProfile({auth}){
  const classes = styles()
  const  profile  = auth.auth
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const signOut = () =>api('auth/signout').then(()=>window.location.replace('/')).catch(e=>alert(e))

  console.log(profile);

  return (
    <div className={classes.root}> 
      <Button aria-describedby={id} onClick={handleClick} aria-haspopup='true'>
        <span>
          { !profile ? <Skeleton width={120} height={40} variant="text" /> : profile?.fullname }
        </span>&nbsp;
        {!profile ? <Skeleton variant="circle" width={40} height={40} /> : <Avatar children={profile?.fullname[0]} />}
      </Button>
      {profile && <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
        transformOrigin={{ vertical: 'top', horizontal: 'right', }} >
          <Card className={ classes.card }>
            <CardContent className={classes.cardContent}>
              <Avatar className={ classes.avatar } children={profile?.fullname[0]} />
              <h3 className={ classes.tile }>{ profile.name }&nbsp;{ profile.lastname }</h3>
              <h4 className={ classes.subtitle }>{ profile?.email }</h4>
              <div className={ classes.buttons } >
                <Button component={Link}
                  to="/account"
                  disableElevation size="small"
                  color="secondary"
                  variant="outlined">Mi cuenta</Button>
                <Button onClick={ ()=> signOut() }
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



export function _ButtonProfile() {

  const [anchorEl, setAnchorEl] = useState(null);

  const  profile  = useAuth()

  const classes = styles()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const signOut = async () =>{

    try {
      await api('auth/signout')
      window.location.replace('/')
    } catch (e) {
      
    }

  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick} aria-haspopup='true'>
        <span>
           { !profile && <Skeleton width={120} height={40} variant="text" /> }
           { profile && profile?.fullname }
        </span>&nbsp;
        {!profile && <Skeleton variant="circle" width={40} height={40} />}
        { profile && <Avatar children={profile?.fullname[0]} />}
      </Button>
      {profile && <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
          <Card className={ classes.content }>
            <CardContent>
              <div className="">
                {profile && <Avatar className={ classes.avatar } children={profile?.fullname[0]} />}
              </div>
              <div className="">
                <h3 className={ classes.tile }>{ profile && profile?.fullname }</h3>
                <h4 className={ classes.subtitle }>{ profile && profile?.email }</h4>
              </div>
              <Button
              onClick={ ()=> signOut() }
              className={ classes.button }
              variant="contained" 
              color="primary" 
              disableElevation>Cerrar Sesión</Button>
            </CardContent>
          </Card>
      </Popover>}
    </div>
  );
}
