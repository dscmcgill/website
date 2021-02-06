import React from 'react';
import '../App.css';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

// Icons
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({

    disabled: {},

    card: {
      boxShadow: 'none',
      margin: '15px'
    },
  }));
  let delay = 900;
  function Objectives(props) {
    const classes = useStyles;
    delay=delay+200;
    return (
      <Grid item sm={4} xs={12} data-aos="zoom-in"
      data-aos-delay={delay}>
        <div style={{ margin: '90px 35px 30px', backgroundColor: 'white', textAlign:'center'}}>
          <Fab disabled style={{ backgroundColor: "#4285F4"}} classes={{ disabled: classes.disabled }}>{props.icon}</Fab> 
          <Typography variant="h5" style={{ color:'grey', textAlign:'center', padding:'15px 0px'}}>{props.keyword} </Typography>
          <Typography style={{ fontSize: '15px', textAlign: 'center' }}>{props.paragraph}</Typography>
        </div>
      </Grid>
    );
  };


export default Objectives;

