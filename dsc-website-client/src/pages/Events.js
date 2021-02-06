import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import {
  upcoming_event_one,
  next_two_coming_events
} from './../static/constants/Constants';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '5%',
    paddingBottom: '5px',
    backgroundColor: theme.palette.primary.dark
  },
  card: {
    border: 'None',
    borderRadius: '5px'
  },
  title: {
    color: theme.textColors.grey,
    textAlign: 'center',
    padding: '0 0 50px 0'
  },
  buttonRight: {
    textTransform: 'none',
    backgroundColor: theme.textColors.blue,
    fontSize: theme.fontSize.twelve,
    color: theme.textColors.white,
    marginTop: 15,
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
    marginTop: 10,
    boxShadow: 'none',
    border: '1px solid #dadce0',
    '&:hover': {
      backgroundColor: '#e8f0fe',
      boxShadow: 'none'
    }
  },
  AvatarLeft: {
    color: theme.textColors.blue,
    backgroundColor: 'rgb(214 238 255)',
    width: 70,
    height: 70
  },
  AvatarRight: {
    color: theme.textColors.green,
    backgroundColor: 'rgb(214 255 238)',
    width: 50,
    height: 50
  }
}));

export default function Events() {
  const classes = useStyles();

  const delay = 200;

  const next_two_events = next_two_coming_events.map((event, index) => {
    return (
      <Grid
        container
        item
        xs={12}
        spacing={3}
        style={{ margin: '0px' }}
        data-aos="fade-left"
        data-aos-delay={index * delay}
      >
        <Card className={classes.card}>
          <CardMedia src={event.image} component="img" title="react Event" />
          <CardContent>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs={10}>
                <Typography component="h2" style={{ fontSize: 12 }}>
                  {event.date}
                </Typography>
                <Typography
                  variant="h5"
                  component="h1"
                  style={{ fontSize: 18 }}
                >
                  {event.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontSize: 12 }}
                >
                  {event.descriprion}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.buttonLeft}
                  onClick={() => window.open(event.url)}
                >
                  Sign up
                </Button>
              </Grid>
              <Grid container item xs={2} justify="flex-end">
                <Avatar className={classes.AvatarRight}>{event.icon}</Avatar>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid id="events" className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Upcoming Events
      </Typography>

      <Grid
        spacing={2}
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid
          item
          sm={6}
          xs={12}
          data-aos="fade-right"
          data-aos-delay={delay + 200}
        >
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              src={upcoming_event_one.image}
              component="img"
              title="Tensorflow Event"
            />
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item xs={10}>
                  <Typography>{upcoming_event_one.date}</Typography>
                  <Typography variant="h5" component="h1">
                    {upcoming_event_one.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {upcoming_event_one.descriprion}
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.buttonRight}
                    onClick={() => window.open(upcoming_event_one.url)}
                  >
                    Sign up
                  </Button>
                </Grid>
                <Grid container item xs={2} justify="flex-end">
                  <Avatar className={classes.AvatarLeft}>
                    {upcoming_event_one.icon}
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={2} xs={12}>
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
