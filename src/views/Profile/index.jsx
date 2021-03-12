import { Grid, Tab, withStyles, Tabs, Box } from '@material-ui/core';
import { useState } from 'react';
import TitlePage from '~/components/TitlePage';
import Layout from '~/views/layout';
import Account from './components/Account';
import Address from './components/Address';
import PassWord from './components/PassWord';

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 70,
      width: '100%',
      backgroundColor: 'transparent',
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
    '@media(max-width:599px)':{
      minWidth: '100%'
    },
    '&:focus': {
      opacity: 1,
    },
  },
  selected: {
    color: '#fff',
    background: theme.palette.secondary.dark,
  },
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = useState( 0 );
  const handleChange = (...[, newValue]) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <TitlePage title='Mi Cuenta' />
      <Grid container>
        <Grid item xs={12} sm={4}>
          <StyledTabs value={value} onChange={handleChange} orientation='vertical' variant='scrollable' >
            <StyledTab label='Datos personales' {...a11yProps(0)} />
            <StyledTab label='Dirección y Ubicación' {...a11yProps(1)} />
            <StyledTab label='Cambiar contraseña' {...a11yProps(2)} />
          </StyledTabs>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TabPanel value={value} index={0} children={ <Account /> } />
          <TabPanel value={value} index={1} children={ <Address /> } />
          <TabPanel value={value} index={2} children={ <PassWord /> } />
        </Grid>
      </Grid>
    </Layout>
  );
}
