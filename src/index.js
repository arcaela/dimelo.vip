import React from 'react';
import ReactDOM from 'react-dom'
import AuroraJS from '@arcaela/aurora';
import './config/themes'
import './config/routes'
import './config/firebase'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(<React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AuroraJS />
    </MuiPickersUtilsProvider>
</React.StrictMode>, document.getElementById('app'));