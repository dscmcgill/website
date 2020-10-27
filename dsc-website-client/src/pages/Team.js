import React from 'react';
import './../App.css';
import { Image } from "react-bootstrap";
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

//Picture import
import profile_picture from './../images/profile_picture.jpg';

// MUI
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: '#5584eb',
    '&$disabled': {
      backgroundColor: '#5584eb',
    },
  },
  disabled: {},
  card: {
    boxShadow: 'none',
    margin: '15px',
  },
  title: {
    color: '#686c70',
    textAlign: 'center',
  },
  subTitles: {
    color: '#686c70',
    textAlign: 'left',
    padding: '15px 0px',
  },
  grid: {
    width: '70%',
  }

}));

function Team() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Image src={profile_picture} circle className="profile-pic" style={{ width: '120px', height: '120px', borderRadius: '50%', }} />
          <h3>Name</h3>
          <h3>Position</h3>
        </Grid>
        <Grid item xs={3}>
          <Image src={profile_picture} circle className="profile-pic" style={{ width: '120px', height: '120px', borderRadius: '50%', }} />
          <h3>Name</h3>
          <h3>Position</h3>
        </Grid>
        <Grid item xs={3}>
          <Image src={profile_picture} circle className="profile-pic" style={{ width: '120px', height: '120px', borderRadius: '50%', }} />
          <h3>Name</h3>
          <h3>Position</h3>
        </Grid>
        <Grid item xs={3}>
          <Image src={profile_picture} circle className="profile-pic" style={{ width: '120px', height: '120px', borderRadius: '50%', }} />
          <h3>Name</h3>
          <h3>Position</h3>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.grid}>
      <Grid
        container
        spacing={2}
        style={{ margin: '25%' }}
        alignItems="center"
      >
        <Typography className={classes.title} variant="h4">
          Meet the Team!
      </Typography>
        <Grid container item xs={12} style={{ margin: '' }}>
          <FormRow />
        </Grid>

        <Grid container item xs={12} style={{ margin: '' }}>
          <FormRow />
        </Grid>

      </Grid>
    </div>
  );
}

export default Team;
