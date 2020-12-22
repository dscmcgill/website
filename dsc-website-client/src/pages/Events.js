import React from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  },
  line: {
    border: 'None',
    borderRadius: '0px'
  }
});

export default function Events() {
  const classes = useStyles();

  return (
    <div id="events">
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
            padding: '100px 20px 100px 100px'
          }}
        >
          <Card className={classes.line}>
            <CardMedia
              className={classes.media}
              src={tensor_flow_event}
              component="img"
              title="Tensorflow Event"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Date
              </Typography>
              <Typography gutterBottom variant="h3" component="h2">
                Tensor Flow workshop
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                learn tensorflow
              </Typography>
              <Button variant="contained">Sign up</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          item
          xs={4}
          style={{ padding: '100px', paddingLeft: '70px' }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={5}
          >
            <Grid container item xs={12}>
              <Card className={classes.line}>
                <CardMedia
                  className={classes.media}
                  src={css_events}
                  component="img"
                  title="css event"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Date
                  </Typography>
                  <Typography gutterBottom variant="h3" component="h2">
                    CSS
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Learn how to css
                  </Typography>
                  <Button variant="contained">Sign up</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Card className={classes.line}>
                <CardMedia
                  className={classes.media}
                  src={react_events}
                  component="img"
                  title="react Event"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Date
                  </Typography>
                  <Typography gutterBottom variant="h3" component="h2">
                    React
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Learn how to react
                  </Typography>
                  <Button variant="contained">Sign up</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
