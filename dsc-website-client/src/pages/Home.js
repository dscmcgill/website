import React from 'react';
import './../App.css';

// MUI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

// Images
import dsc_logo from './../static/images/dsc_logo.svg';
import homePageImage from './../static/images/homePageImage.png';

// Icons
import Fab from '@material-ui/core/Fab';

// Constants
import { homePageConstants } from './../static/constants/Constants';

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: theme.textColors.blue,
    '&$disabled': {
      backgroundColor: theme.textColors.blue
    }
  },
  disabled: {},
  card: {
    boxShadow: 'none',
    margin: '15px'
  },
  title: {
    color: theme.textColors.grey,
    textAlign: 'center'
  },
  subTitles: {
    color: theme.textColors.grey,
    textAlign: 'left',
    padding: '15px 0px'
  },
  media: {
    background: 'transparent',
    boxShadow: 'none',
    padding: '0 65px 0 0px'
  }
}));

function Home() {
  const classes = useStyles();

  const threeSquares = homePageConstants.map((square) => {
    return (
      <Grid item sm={4} xs={12}>
        <div style={{ margin: '25px', backgroundColor: 'white' }}>
          <Fab
            disabled
            classes={{ root: classes.fab, disabled: classes.disabled }}
          >
            {square.icon}
          </Fab>
          <Typography variant="h5" className={classes.subTitles}>
            {square.keywords}
          </Typography>
          <Typography style={{ fontSize: '14px', textAlign: 'justify' }}>
            {square.paragraph}
          </Typography>
        </div>
      </Grid>
    );
  });

  const leftSide = (
    <Grid
      container
      justify="center"
      item
      xs={6}
      data-aos="zoom-in"
      data-aos-delay={200}
    >
      <Grid container item sm={8} xs={12}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Card className={classes.card}>
            <CardMedia
              style={{
                width: '200px',
                display: 'block',
                margin: 'auto'
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
          {threeSquares}
        </Grid>
      </Grid>
    </Grid>
  );

  const rightSide = (
    <Grid
      item
      container
      justify="center"
      sm={6}
      xs={6}
      data-aos="zoom-in"
      data-aos-delay={400}
    >
      <Card className={classes.media}>
        <CardMedia
          src={homePageImage}
          component="img"
          title="home page image"
        />
      </Card>
    </Grid>
  );
  return (
    <div id="home">
      <Grid
        style={{ minHeight: '100vh' }}
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className="landingPage"
      >
        {leftSide}
        {rightSide}
      </Grid>
    </div>
  );
}

export default Home;
