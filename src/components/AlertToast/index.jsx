import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import React from 'react';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AlertToast({
        open, 
        handleClose, 
        hideDuration, 
        severity, 
        message,
        anchorOrigin
    }) {
    return (
        <Snackbar
        anchorOrigin={anchorOrigin}
        open={open} 
        autoHideDuration={hideDuration} 
        onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
            { message }
            </Alert>
        </Snackbar>
    );
}
