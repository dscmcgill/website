import React, { react_events } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {
  upcoming_event_one,
  next_two_coming_events
} from './../static/constants/Constants';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '5%',
    backgroundColor: theme.palette.primary.dark
  },
  card: {
    border: 'None',
    borderRadius: '5px'
  },
  title: {
    color: theme.textColors.grey,
    textAlign: 'center'
  },
  buttonRight: {
    textTransform: 'none',
    backgroundColor: theme.textColors.blue,
    fontSize: theme.fontSize.twelve,
    color: theme.textColors.white,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.textColors.blue
    }
  },
  buttonLeft: {
    textTransform: 'none',
    backgroundColor: theme.textColors.white,
    fontSize: theme.fontSize.twelve,
    color: theme.textColors.blue,
    boxShadow: 'none',
    border: '1px solid #dadce0',
    '&:hover': {
      backgroundColor: '#e8f0fe',
      boxShadow: 'none'
    }
  }
}));

export default function Events() {
  const classes = useStyles();

  const next_two_events = next_two_coming_events.map((event) => {
    return (
      <Grid container item xs={12} spacing={3} style={{ margin: '5px' }}>
        <Card className={classes.card}>
          <CardMedia src={event.image} component="img" title="react Event" />
          <CardContent>
            <Typography gutterBottom component="h2">
              {event.date}
            </Typography>
            <Typography gutterBottom variant="h5" component="h1">
              {event.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {event.descriprion}
            </Typography>
            <Button variant="contained" className={classes.buttonLeft}>
              Sign up
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid id="events" className={classes.root}>
      <Typography
        gutterBottom
        variant="h2"
        component="h1"
        className={classes.title}
      >
        Upcoming Events
      </Typography>

      <Grid
        spacing={1}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid
          item
          xs={6}
          style={{
            padding: '20px 70px'
          }}
        >
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              src={upcoming_event_one.image}
              component="img"
              title="Tensorflow Event"
            />
            <CardContent>
              <Typography>{upcoming_event_one.date}</Typography>
              <Typography gutterBottom variant="h5" component="h1">
                {upcoming_event_one.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {upcoming_event_one.descriprion}
              </Typography>
              <Button variant="contained" className={classes.buttonRight}>
                Sign up
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={3}
          style={{ padding: '10px 100px ', paddingLeft: '70px' }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {next_two_events}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
