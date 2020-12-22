import React from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

// Events
import css_events from '../static/images/upcomingEvents/css_event.jpeg';
import react_events from '../static/images/upcomingEvents/react_event.png';
import tensor_flow_event from '../static/images/upcomingEvents/tensor_flow_event.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    width: '100%'
  }
});

export default function Events() {
  const classes = useStyles();

  return (
    <div id="events">
      <Grid
        spacing={2}
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Grid container item xs={8}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              src={tensor_flow_event}
              component="img"
              title="Tensorflow Event"
            />
          </Card>
        </Grid>
        <Grid container item xs={4}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid container item xs={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  src={css_events}
                  component="img"
                  title="css event"
                />
              </Card>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  src={react_events}
                  component="img"
                  title="react Event"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
