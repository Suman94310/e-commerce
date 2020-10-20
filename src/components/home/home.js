import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CallIcon from '@material-ui/icons/Call';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


import Card from "../card/card"

// importing css
import "./home.css"

// importing logo
import axe from "./axe.svg"

// tab panel
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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function Home() {
    // tabs
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="home">
            <Grid container >
                <Grid item container alignItems="center" justify="space-between" md={12} className="home-nav">
                    <Grid item container md={2}>
                        <Grid item xs={2}><img src={axe} alt="logo" /></Grid>
                        <Grid item xs={10} spacing={0} justify="center">
                            <Typography variant="h5">
                                Woodsmith
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container md={9} alignItems="center" justify="space-around">
                        <input type="text" className="home-input"></input>
                    </Grid>
                    <Grid item container md={1} justify="space-between" alignItems="center">
                        <Grid item>
                            <PersonIcon/>
                        </Grid>
                        <Grid item>
                            <ShoppingCartIcon/>
                        </Grid>
                        <Grid item>
                            <CallIcon/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="home-headline" item container justify="flex-start" md={12}>
                    <div><b>Discover</b> the best</div>
                </Grid>
                <Grid item md={12}>
                    <AppBar position="static" className="home-bestTabs">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <Grid container>
                            <Grid item md={2}>
                                <Card/>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
