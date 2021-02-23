import React, { useEffect, useState } from 'react'
import TitlePage from '../../../components/TitlePage';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box } from '@material-ui/core';
import LiderTab from './LiderTab';
import firebase from '../../../config/firebase';
import UserTab from './UserTab';

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

export default function Movimiento(){

    const [value, setValue] = useState(0);
    const [leaders, setLeaders] = useState([]);
    const [users, setUsers] = useState([]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    useEffect(() => {
      const getLeaders = async () => {
        try {
          const leaders = firebase.firestore();
  
          const users = await leaders
            .collection('users')
            .where('role', '==', 1)
            .get();
  
          setLeaders(users.docs.map((e) => e.data()));
        } catch (e) {
          console.log(e);
        }
      };
      getLeaders();
    }, []);

    useEffect(() => {
      const getUsers = async () => {
        try {
          const leaders = firebase.firestore();
  
          const users = await leaders
            .collection('users')
            .where('role', '==', 2)
            .get();
  
            setUsers(users.docs.map((e) => e.data()));
        } catch (e) {
          console.log(e);
        }
      };
      getUsers();
    }, []);
    
    return (
        <>
            <TitlePage title="Movimiento" />
            <div className="">
            <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                <StyledTab label="Lideres de Celula" {...a11yProps(0)} />
                <StyledTab label="Usuarios" {...a11yProps(1)} />
            </StyledTabs>
            <div style={{
                marginTop: 30,
                marginBottom: 60
            }}>
                
            </div>
            </div>
            <TabPanel value={value} index={0}>
                <LiderTab leaders={leaders} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UserTab users={users} />
            </TabPanel>
        </>
    )
};