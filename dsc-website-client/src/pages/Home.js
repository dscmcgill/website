import React from 'react';
import './../App.css';

// MUI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Images
import dsc_logo from './../images/dsc_logo.svg';

export default function Home() {
  return (
    <div>
      <Grid
        style={{ height: '100vh' }}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Card style={{ boxShadow: 'none' }}>
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
              <Typography
                style={{ color: '#686c70', textAlign: 'center' }}
                variant="h2"
              >
                Developer Student Clubs
              </Typography>
              <Typography
                style={{ color: '#686c70', textAlign: 'center' }}
                variant="h3"
              >
                McGill University
              </Typography>
            </Card>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid xs={4}>
              <div style={{ margin: '5px' }}>
                <Typography variant="h5" style={{ color: '#686c70' }}>
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
                <Typography variant="h5" style={{ color: '#686c70' }}>
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
                <Typography variant="h5" style={{ color: '#686c70' }}>
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
