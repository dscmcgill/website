import React from 'react';
import './../App.css';

// MUI
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { team_members, teams_leads } from './../static/constants/Constants';

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: theme.textColors.blue,
    '&$disabled': {
      backgroundColor: theme.textColors.blue
    }
  },
  card: {
    boxShadow: 'none',
    margin: '15px'
  },
  title: {
    color: theme.textColors.grey,
    textAlign: 'center'
  },
  lead: {
    color: theme.textColors.red
  },

  not_lead: {
    color: theme.textColors.yellow
  },

  description: {
    backgroundColor: theme.palette.primary.dark,
    fontSize: theme.fontSize.sixteen,
    color: theme.textColors.grey,
    padding: '10px',
    borderRadius: '5px',
    background: theme.textColors.grey,
    textAlign: 'center'
  },

  name: {
    background: '#4285F4',
    borderRadius: '5px 5px 0 0',
    color: theme.textColors.white,
    fontSize: theme.fontSize.twentyfour,
    fontWeight: 'bold',
    padding: '5px 0 5px 5px'
  },

  position: {
    background: theme.textColors.blue,
    borderRadius: '0 0 5px 5px',
    color: theme.textColors.white,
    fontSize: theme.fontSize.sixteen,
    padding: '0 5px 5px 5px'
  },

  subTitles: {
    color: theme.textColors.grey,
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
  let delay = 0;
  const leads = teams_leads.map((member, index) => {
    delay += 200;
    return (
      <Grid
        xs={4}
        item
        container
        justify="left"
        className={classes.individual}
        direction="column"
        data-aos="zoom-in"
        data-aos-delay={delay}
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
          <Typography className={classes.description}>
            {member.description}
          </Typography>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <IconButton
            style={{ color: '#2867B2' }}
            onClick={() => {
              window.open(member.LinkedIn);
            }}
          >
            <LinkedInIcon style={{ width: 30, height: 30 }} />
          </IconButton>
        </Grid>
      </Grid>
    );
  });

  const developers = team_members.map((devs, index) => {
    delay += 200;
    return (
      <Grid
        xs={4}
        item
        justify="left"
        className={classes.individual}
        direction="row"
        data-aos="zoom-in"
        data-aos-delay={delay}
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
        <Grid container direction="row" justify="center" alignItems="center">
          <IconButton
            style={{ color: '#2867B2' }}
            onClick={() => {
              window.open(devs.LinkedIn);
            }}
          >
            <LinkedInIcon style={{ width: 30, height: 30 }} />
          </IconButton>
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
      <Grid container spacing={2} style={{ margin: '5%' }} alignItems="center">
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" className={classes.title}>
              Meet the team
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={3} className="team">
          <Grid container justify="center" xs={12}>
            <Typography variant="h4" component="p" className={classes.lead}>
              Leads
            </Typography>
          </Grid>

          {leads}

          <Grid item container justify="center" xs={12}>
            <Typography variant="h4" component="p" className={classes.not_lead}>
              Developers
            </Typography>
          </Grid>

          {developers}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Team;
