import React from 'react';
import './../App.css';

// MUI
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { team_members, teams_leads } from './../static/constants/Constants';

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: '#5584eb',
    '&$disabled': {
      backgroundColor: '#5584eb'
    }
  },
  card: {
    boxShadow: 'none',
    margin: '15px'
  },
  title: {
    color: '#686c70',
    textAlign: 'center',
    fontSize: '4rem',
    fontFamily: 'Product Sans'
  },

  lead: {
    color: '#DB4437',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
    background: 'rgba(255,255,255,0.5)',
    width: 'auto',
    borderRadius: '50px'
  },

  not_lead: {
    color: '#F4B400',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
    background: 'rgba(255,255,255,0.5)',
    width: 'auto',
    borderRadius: '50px'
  },

  description: {
    fontSize: '18px',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'justify',
    alignItems: 'left',
    maxWidth: '',
    background: 'rgb(126, 127, 127)',
    fontFamily: 'Product Sans'
  },

  name: {
    background: '#4285F4',
    borderRadius: '5px 5px 0 0',
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
    padding: '5px 0 5px 5px'
  },

  position: {
    background: '#4285F4',
    borderRadius: '0 0 5px 5px',
    color: 'white',
    fontSize: '1.2rem',
    fontFamily: 'Product Sans',
    padding: '0 5px 5px 5px'
  },

  subTitles: {
    color: '#686c70',
    textAlign: 'left',
    padding: '15px 0px'
  },

  individual: {
    borderRadius: '10px',
    margin: '0 0px 5px 0'
  },

  profile_pic: {
    width: 'auto',
    height: '175px',
    border: '5px solid #0F9D58',
    borderRadius: '50%',
    margin: '3px 30px'
  }
}));

function Team() {
  const classes = useStyles();
  const leads = teams_leads.map((member) => {
    console.log(member.picture);
    return (
      <Grid
        xs={4}
        item
        container
        justify="left"
        className={classes.individual}
        direction="column"
      >
        <Grid
          className={classes.box}
          item
          container
          justify="center"
          direction="row"
        >
          <Grid item xs={6}>
            <img src={member.picture} className={classes.profile_pic} />
          </Grid>
          <Grid item xs={6} className={classes.name_pos}>
            <Typography className={classes.name}>{member.name}</Typography>
            <Typography className={classes.position}>
              {member.position}
            </Typography>
          </Grid>
        </Grid>
        <Grid alignItems="flex-start" container item s={6}>
          <Typography
            className={classes.description}
            style={{ textAlign: 'left' }}
          >
            {member.description}
          </Typography>
        </Grid>
      </Grid>
    );
  });

  const developers = team_members.map((devs) => {
    return (
      <Grid
        xs={4}
        item
        justify="left"
        className={classes.individual}
        direction="row"
      >
        <Grid
          className={classes.box}
          item
          container
          justify="center"
          direction="row"
        >
          <Grid item xs={6}>
            <img src={devs.picture} className={classes.profile_pic} />
          </Grid>
          <Grid item xs={6} className={classes.name_pos}>
            <Typography className={classes.name}>{devs.name}</Typography>
            <Typography className={classes.position}>
              {devs.position}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container s={6}>
          <Typography className={classes.description}>
            {devs.description}
          </Typography>
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      id="team"
    >
      <Grid container spacing={2} style={{ margin: '10%' }} alignItems="center">
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Meet the team</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={3} className="team">
          <Grid container justify="center" xs={12}>
            <Typography className={classes.lead}>Leads</Typography>
          </Grid>

          {leads}

          <Grid item container justify="center" xs={12}>
            <Typography className={classes.not_lead}>Developers</Typography>
          </Grid>

          {developers}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Team;
