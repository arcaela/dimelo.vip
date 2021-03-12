import React, { useEffect, useState } from 'react'
import { merge } from 'lodash'
import TitlePage from '~/components/TitlePage';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box } from '@material-ui/core';
import LiderTab from './LiderTab';
import UserTab from './UserTab';
import { scopes } from '~/ServerLess';
import Loading from '~/components/Loading';

const StyledTabs = withStyles(theme => ({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 70,
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
      },
    },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box>{children}</Box>
        )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const $inputs = {
  users:[],
  loading:true,
};
export default function Movimiento(){
    const [value, setValue] = useState(0);
    const [inputs, _reset] = useState($inputs);
    const setInputs = React.useCallback((value)=>_reset(p=>({...merge($inputs, p, value)})), [ _reset ]);
    const red = {
      count:inputs.users.length,
      leaders:inputs.users.filter(user=>user.rol<2),
      users:inputs.users.filter(user=>user.rol>1),
    };
    useEffect(()=>{
      if(!inputs.users.length){
        scopes.users.get()
          .then((snap)=>setInputs({loading:false,users:snap.docs.map(e=>e.data())}))
          .catch(()=>setInputs({loading:false}))
      }
      return undefined;
    }, [ inputs, setInputs ]);

    return (<>
      <TitlePage title="Movimiento" />
      <div className="">
        <StyledTabs value={value} onChange={(...[,nValue])=>setValue(nValue)} aria-label="styled tabs example">
          <StyledTab label={`Lideres de Celula (${red.leaders.length})`} {...a11yProps(0)} />
          <StyledTab label={`Usuarios (${red.users.length})`} {...a11yProps(1)} />
        </StyledTabs>
        <div style={{ marginTop: 30, marginBottom: 60 }} />
      </div>
      { inputs.loading ? <Loading /> : (<>
        <TabPanel value={value} index={0} children={()=><LiderTab users={red.leaders} />} />
        <TabPanel value={value} index={1} children={()=><UserTab users={red.users} />} />
      </>) }
    </>);
};