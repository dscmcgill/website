import React from 'react';
import './../App.css';

// import { Image } from "react-bootstrap";
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


import { team_members } from './../static/constants/Constants';

//Picture import
import saba_fathi from './../static/images/saba_fathi.jpg';
import pulasthi_peiris from './../static/images/pulasthi_peiris.JPG';
import parsa_yadollahi from './../static/images/parsa_yadollahi.jpeg';
import mohamed_beydoun from './../static/images/mohamed_beydoun.jpg';
import julie_tian from './../static/images/julie_tian.jpg';
import profile_picture from './../static/images/profile_picture.jpg';

// MUI
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: '#5584eb',
    '&$disabled': {
      backgroundColor: '#5584eb'
    }
  },

  disabled: {},

  card: {
    boxShadow: 'none',
    margin: '15px'
  },

  title: {
    color: '#686c70',
    textAlign: 'center',
    fontSize: '4rem',
    fontFamily: 'Product Sans'
  },

  lead: {
    color: '#DB4437',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
    background: 'rgba(255,255,255,0.5)',
    width: 'auto',
    borderRadius: '50px'
  },

  not_lead: {
    color: '#F4B400',
    fontSize: '2.5rem',
    // margin: '25px 0 20px 100px',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
    background: 'rgba(255,255,255,0.5)',
    width: 'auto',
    borderRadius: '50px'
  },

  description: {
    fontSize: '18px',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'justify',
    alignItems: 'left',
    maxWidth: '',
    background: 'rgb(126, 127, 127)',
    fontFamily: 'Product Sans'
  },

  name: {
    background: '#4285F4',
    borderRadius: '5px 5px 0 0',
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
    padding: '5px 0 5px 5px'
  },

  position: {
    background: '#4285F4',
    borderRadius: '0 0 5px 5px',
    color: 'white',
    fontSize: '1.2rem',
    fontFamily: 'Product Sans',
    padding: '0 5px 5px 5px'
  },

  subTitles: {
    color: '#686c70',
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
  },
  box: {
    // maxHeight: '180px' ,
  }
}));

function Team() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      id="team"
    >
      <Grid container spacing={2} style={{ margin: '10%' }} alignItems="center">
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Meet the team</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={3} className="team">
          <Grid container justify="center" xs={12}>
            <Typography className={classes.lead}>Leads</Typography>
          </Grid>

          <Grid
            xs={4}
            item
            container
            justify="left"
            className={classes.individual}
            direction="column"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img src={profile_picture} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>
                  {team_members[0].name}
                </Typography>
                <Typography className={classes.position}>DSC Lead</Typography>
              </Grid>
            </Grid>
            <Grid alignItems="flex-start" container item s={6}>
              <Typography className={classes.description} style={{ textAlign: 'left' }}>
                {team_members[0].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            container
            justify="center"
            className={classes.individual}
            direction="row"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img src={parsa_yadollahi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>
                  {team_members[2].name}
                </Typography>
                <Typography className={classes.position}>
                  {team_members[2].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                {team_members[2].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item container justify="left" className={classes.individual} direction="column">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={profile_picture} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>{team_members[11].name}</Typography>
                <Typography className={classes.position}>{team_members[11].position}</Typography>
              </Grid>
            </Grid>
            <Grid alignItems="flex-start" container item s={6}>
              <Typography className={classes.description}>
                {team_members[11].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            justify="center"
            className={classes.individual}
            direction="row"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img src={mohamed_beydoun} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>
                  {team_members[3].name}
                </Typography>
                <Typography className={classes.position}>
                  {team_members[3].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                {team_members[3].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            container
            justify="center"
            className={classes.individual}
            direction="row"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img
                  src={profile_picture}
                  circle
                  className={classes.profile_pic}
                />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>{team_members[7].name}</Typography>
                <Typography className={classes.position}>
                  {team_members[7].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                {team_members[7].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            container
            justify="left"
            className={classes.individual}
            direction="column"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img src={profile_picture} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>{team_members[6].name}</Typography>
                <Typography className={classes.position}>
                  {team_members[6].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid alignItems="flex-start" container item s={6}>
              <Typography className={classes.description}>
                {team_members[6].description}
              </Typography>
            </Grid>
          </Grid>
          {/* </Grid> */}

          <Grid item container justify="center" xs={12}>
            <Typography className={classes.not_lead}>Developers</Typography>
          </Grid>

          <Grid
            xs={4}
            item
            justify="left"
            className={classes.individual}
            direction="row"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img src={pulasthi_peiris} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>
                  {team_members[4].name}
                </Typography>
                <Typography className={classes.position}>
                  {team_members[4].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container s={6}>
              <Typography className={classes.description}>
                {team_members[4].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            container
            justify="left"
            className={classes.individual}
            direction="column"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img src={julie_tian} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>{team_members[5].name}</Typography>
                <Typography className={classes.position}>
                  {team_members[5].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid alignItems="flex-start" container item s={6}>
              <Typography className={classes.description}>
                {team_members[5].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            justify="center"
            className={classes.individual}
            direction="row"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img src={saba_fathi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>{team_members[1].name}</Typography>
                <Typography className={classes.position}>
                  {team_members[1].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                {team_members[1].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            container
            justify="center"
            className={classes.individual}
            direction="row"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img
                  src="data:image/jpeg;base64,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"
                  circle
                  className={classes.profile_pic}
                />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>{team_members[8].name}</Typography>
                <Typography className={classes.position}>
                  {team_members[8].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                {team_members[8].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            container
            justify="left"
            className={classes.individual}
            direction="column"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img src={profile_picture} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>{team_members[10].name}</Typography>
                <Typography className={classes.position}>
                  {team_members[10].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid alignItems="flex-start" container item s={6}>
              <Typography className={classes.description}>
                {team_members[10].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            container
            justify="left"
            className={classes.individual}
            direction="column"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img src={profile_picture} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>{team_members[9].name}</Typography>
                <Typography className={classes.position}>
                  {team_members[9].position}
                </Typography>
              </Grid>
            </Grid>
            <Grid alignItems="flex-start" container item s={6}>
              <Typography className={classes.description}>
                {team_members[9].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            justify="center"
            className={classes.individual}
            direction="row"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img
                  src={profile_picture}
                  circle
                  className={classes.profile_pic}
                />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>{team_members[12].name}</Typography>
                <Typography className={classes.position}>{team_members[12].position}</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                {team_members[12].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            justify="center"
            className={classes.individual}
            direction="row"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img
                  src={profile_picture}
                  circle
                  className={classes.profile_pic}
                />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>{team_members[13].name}</Typography>
                <Typography className={classes.position}>{team_members[13].position}</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                {team_members[13].description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={4}
            item
            justify="center"
            className={classes.individual}
            direction="row"
          >
            <Grid
              className={classes.box}
              item
              container
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <img
                  src={profile_picture}
                  circle
                  className={classes.profile_pic}
                />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>{team_members[14].name}</Typography>
                <Typography className={classes.position}>{team_members[14].position}</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                {team_members[14].description}
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}

export default Team;
