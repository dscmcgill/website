import React from 'react';
import './../App.css';

// MUI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

// Images
import dsc_logo from './../images/dsc_logo.svg';

// Icons
import GroupIcon from '@material-ui/icons/Group';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import WorkIcon from '@material-ui/icons/Work';
import Fab from '@material-ui/core/Fab';

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
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        style={{ height: '100vh' }}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7} style={{ padding: '50px' }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card}>
              <CardMedia
                style={{
                  width: '200px',
                  display: 'block',
                  margin: 'auto',
                }}
                src={dsc_logo}
                component="img"
                title="dsc logo"
              />
              <Typography className={classes.title} variant="h2">
                Developer Student Clubs
              </Typography>
              <Typography className={classes.title} variant="h3">
                McGill University
              </Typography>
            </Card>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid xs={4}>
              <div style={{ margin: '5px' }}>
                <Fab
                  disabled
                  classes={{ root: classes.fab, disabled: classes.disabled }}
                >
                  <GroupIcon style={{ color: '#ffffff' }} />
                </Fab>
                <Typography variant="h5" className={classes.subTitles}>
                  Connect
                </Typography>
                <Typography style={{ fontSize: '14px' }}>
                  Meet other students on campus interested in developer
                  technologies. All are welcome, including those with diverse
                  backgrounds and different majors.
                </Typography>
              </div>
            </Grid>
            <Grid xs={4}>
              <div style={{ margin: '5px' }}>
                <Fab
                  disabled
                  classes={{ root: classes.fab, disabled: classes.disabled }}
                >
                  <DeveloperModeIcon style={{ color: '#ffffff' }} />
                </Fab>
                <Typography variant="h5" className={classes.subTitles}>
                  Learn
                </Typography>
                <Typography style={{ fontSize: '14px' }}>
                  Learn about a wide range of technical topics where new skills
                  are gained through hands-on workshops, in-person training and
                  project building activities.
                </Typography>
              </div>
            </Grid>
            <Grid xs={4}>
              <div style={{ margin: '5px' }}>
                <Fab
                  disabled
                  classes={{ root: classes.fab, disabled: classes.disabled }}
                >
                  <WorkIcon style={{ color: '#ffffff' }} />
                </Fab>
                <Typography variant="h5" className={classes.subTitles}>
                  Grow
                </Typography>
                <Typography style={{ fontSize: '14px' }}>
                  Apply your new learnings and connections to build great
                  solutions for local problems. Advance your skills, career and
                  network. Give back to your community by helping others learn
                  as well.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={5}
          className="landingPage"
          style={{ height: '100%' }}
        ></Grid>
      </Grid>
    </div>
  );
}

export default Home;
