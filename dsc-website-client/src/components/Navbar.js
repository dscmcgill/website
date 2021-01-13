import React from 'react';

// Images
import dsc_logo from './../static/images/dsc_logo.svg';

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
    backgroundColor: theme.textColors.white,
    boxShadow: '0px 1px 8px #aaaaaa'
  },
  logo: {
    width: '50%'
  },
  button_logo: {
    margin: '10px 5px',
    padding: '5px 30px'
  },
  buttonRightSide: {
    margin: 'auto 30px',
    padding: '5px 50px'
  },
  buttonLeftTypo: {
    fontSize: theme.fontSize.twentyfour,
    textTransform: 'none',
    color: theme.textColors.grey
  },
}));

const goToDiv = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

function Navbar() {
  const classes = useStyles();

  return (
    <>
    <AppBar position="sticky" className={classes.appBar}>
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
            className={classes.buttonRightSide}
            onClick={() => {
              goToDiv('events');
            }}
          >
            <Typography className={classes.buttonLeftTypo}>Events</Typography>
          </Button>
          <Button
            size="large"
            className={classes.buttonRightSide}
            onClick={() => {
              goToDiv('team');
            }}
          >
            <Typography className={classes.buttonLeftTypo}>Team</Typography>
          </Button>
          <Button
            size="large"
            className={classes.buttonRightSide}
            onClick={() => {
              goToDiv('joinus');
            }}
          >
            <Typography className={classes.buttonLeftTypo}>Join us!</Typography>
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
    </>
  );
}

export default Navbar;
