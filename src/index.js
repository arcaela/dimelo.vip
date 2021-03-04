import React from 'react';
import ReactDOM from 'react-dom'
import AuroraJS from '@arcaela/aurora';
import './config/themes'
import './config/routes'
import './config/firebase'

import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

ReactDOM.render(<React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <AuroraJS />
    </MuiPickersUtilsProvider>
</React.StrictMode>, document.getElementById('app'));