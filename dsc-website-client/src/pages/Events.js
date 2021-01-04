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

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    width: '100%'
  },
  line: {
    border: 'None',
    borderRadius: '0px'
  },
  title: {
    color: '#686c70',
    textAlign: 'center',
    fontSize: '4rem',
    fontFamily: 'Product Sans'
  }
});

export default function Events() {
  const classes = useStyles();

  const next_two_events = next_two_coming_events.map((event) => {
    return (
      <Grid container item xs={12} spacing={3} style={{ margin: '5px' }}>
        <Card className={classes.line}>
          <CardMedia
            className={classes.media}
            src={event.image}
            component="img"
            title="react Event"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {event.date}
            </Typography>
            <Typography gutterBottom variant="h3" component="h2">
              {event.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {event.descriprion}
            </Typography>
            <Button variant="contained">Sign up</Button>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div>
      <div id="events"></div>
      <Typography
        gutterBottom
        variant="h2"
        component="h2"
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
          container
          item
          xs={8}
          style={{
            padding: '20px 70px'
          }}
        >
          <Card className={classes.line}>
            <CardMedia
              className={classes.media}
              src={upcoming_event_one.image}
              component="img"
              title="Tensorflow Event"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {upcoming_event_one.date}
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                {upcoming_event_one.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {upcoming_event_one.descriprion}
              </Typography>
              <Button variant="contained">Sign up</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          item
          xs={4}
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
    </div>
  );
}
