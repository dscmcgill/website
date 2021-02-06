import React from 'react';
import './../App.css';
import Objectives from '../components/Objectives';

// MUI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

// Images
import dsc_logo from './../static/images/dsc_logo.svg';
import homePageImage from './../static/images/homePageImage.png';

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
    margin: '50px 15px',

  },
  title: {
    color: theme.textColors.grey,
    textAlign: 'center',
  },
  subTitles: {
    color: theme.textColors.grey,
    textAlign: 'left',
    padding: '15px 0px'
  },
  media: {
    background: 'transparent',
    boxShadow: 'none',
  },
}));

function Home() {
  const classes = useStyles();

  const leftSide = (
    <Grid
      container
      justify="center"
      item
      xs={7}
      data-aos="zoom-in"
      data-aos-delay={200}
    >
      <Grid container item sm={8} xs={12}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Card className={classes.card} >
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
        </Grid>
      </Grid>
    </Grid>
  );

  const rightSide = (
    <Grid
      item
      container
      justify="center"
      sm={5}
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
        style={{ minHeight: '100vh', padding:'70px' }}
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className="landingPage"
      >
        {leftSide}
        {rightSide}
        {homePageConstants.map((props) => 
          <Objectives
            key={props.id}
            keyword={props.keywords}
            paragraph={props.paragraph}
            icon={props.icon}
          />
        )}
      </Grid>
    </div>
  );
}

export default Home;
