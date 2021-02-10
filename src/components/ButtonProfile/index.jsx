import React, { useState } from 'react';
import { 
    Avatar, 
    Button, 
    Popover,
    Card,
    CardContent   
} from '@material-ui/core';
import useAuth from '../../ServerLess/Hooks/useAuth';

export default function ButtonProfile() {
  const [anchorEl, setAnchorEl] = useState(null);

  const  profile  = useAuth()

  console.log( profile )

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
        <span>Alejandro Reyes</span>&nbsp;
        <Avatar children='A' />
      </Button>
      <Popover
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
          <Card>
            <CardContent>
                <h1>Hola</h1>
            </CardContent>
          </Card>
      </Popover>
    </div>
  );
}
