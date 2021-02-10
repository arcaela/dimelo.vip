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
import useAuth from '../../ServerLess/useAuth';

const styles = makeStyles((theme)=>({
  content:{
    minWidth: 300,
    textAlign: 'center'
  },
  tile:{
    marginBottom: 5
  },
  subtitle:{
    margin:0
  },
  avatar:{
    margin: 'auto',
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  button:{
    marginTop: 15
  }
}))

export default function ButtonProfile() {

  const [anchorEl, setAnchorEl] = useState(null);

  const  profile  = useAuth()

  console.log( profile )

  const classes = styles()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick} aria-haspopup='true'>
        <span>
           { !profile && <Skeleton width={120} height={40} variant="text" /> }
           { profile && profile.profile.name }
        </span>&nbsp;
        {!profile && <Skeleton variant="circle" width={40} height={40} />}
        { profile && <Avatar children={profile.profile.name[0]} />}
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
                {profile && <Avatar className={ classes.avatar } children={profile.profile.name[0]} />}
              </div>
              <div className="">
                <h3 className={ classes.tile }>{ profile && profile.profile.name }</h3>
                <h4 className={ classes.subtitle }>{ profile && profile.profile.email }</h4>
              </div>
              <Button
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
