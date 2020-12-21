import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import dsc_logo from './../static/images/dsc_logo.svg'

// MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none'
  },

  logo: {
    width: '80px'
  },
  button_logo: {
    margin: '40px 10px',
    padding: '5px 30px'
  },
  buttonLeftSide: {
    margin: 'auto 20px',
    padding: '5px 70px'
  },
  buttonLeftTypo: {
    fontSize: '32px',
    textTransform: 'none',
    color: '#686c70'
  }
}));

const goToDiv = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {/* Left side */}
        <Button
          className={classes.button_logo}
          onClick={() => {
            goToDiv('home');
          }}
        >
          <Tooltip title="Home">
            <img src={dsc_logo} alt="logo" className={classes.logo} />
          </Tooltip>
        </Button>
        {/* Right side */}
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Button
            size="large"
            className={classes.buttonLeftSide}
            onClick={() => {
              goToDiv('team');
            }}
          >
            <Typography className={classes.buttonLeftTypo}>Team</Typography>
          </Button>
          <Button
            size="large"
            className={classes.buttonLeftSide}
            onClick={() => {
              goToDiv('events');
            }}
          >
            <Typography className={classes.buttonLeftTypo}>Events</Typography>
          </Button>
          <Button size="large" className={classes.buttonLeftSide}>
            <Typography className={classes.buttonLeftTypo}>Join us!</Typography>
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
