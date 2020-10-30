import React from 'react';
import './../App.css';

// import { Image } from "react-bootstrap";
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

//Picture import
import squares from './../images/squares.png';
import saba_fathi from './../images/saba_fathi.jpg';
import pulasthi_peiris from './../images/pulasthi_peiris.JPG';
import parsa_yadollahi from './../images/parsa_yadollahi.jpeg';
import mohamed_beydoun from './../images/mohamed_beydoun.jpg';
import julie_tian from './../images/julie_tian.jpg';
// MUI
import Grid from '@material-ui/core/Grid';

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
    fontSize: '4rem',
    fontFamily: 'Product Sans',
  },

  lead: {
    color: '#DB4437',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
    background: 'rgba(255,255,255,0.5)',
    width: 'auto',
    borderRadius: '50px',
  },

  not_lead: {
    color: '#F4B400',
    fontSize: '2.5rem',
    // margin: '25px 0 20px 100px',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
    background: 'rgba(255,255,255,0.5)',
    width: 'auto',
    borderRadius: '50px',
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
    fontFamily: 'Product Sans',
  },

  name: {
    background: '#4285F4',
    borderRadius: '5px 5px 0 0',
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    fontFamily: 'Product Sans',
    padding: '5px 0 5px 5px',
  },

  position: {
    background: '#4285F4',
    borderRadius: '0 0 5px 5px',
    color: 'white',
    fontSize: '1.2rem',
    fontFamily: 'Product Sans',
    padding: '0 5px 5px 5px',
  },

  subTitles: {
    color: '#686c70',
    textAlign: 'left',
    padding: '15px 0px',
  },

  individual: {
    borderRadius: '10px',
    margin: '0 0px 5px 0',
  },

  profile_pic: {
    width: 'auto',
    height: '175px',
    border: '5px solid #0F9D58',
    borderRadius: '50%',
    margin: '3px 30px'
  },
  test: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Team() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid
        container
        spacing={2}
        style={{ margin: '10%' }}
        alignItems="center"
      >
        <Grid container xs={12} >
          <Grid item xs={12}>
            <Typography className={classes.title}>
              Meet the team
        </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={3} className="team">
          <Grid container
            justify="center"
            xs={12}>
            <Typography className={classes.lead} >
              Leads
            </Typography>
          </Grid>
          <Grid xs={4} item container justify="left" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={parsa_yadollahi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Maneth Kalatunge</Typography>
                <Typography className={classes.position}>DSC Lead</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                Basic Youtuber, Aspiring Podcaster.
            </Typography>
            </Grid>
          </Grid>


          <Grid xs={4} item container justify="center" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={parsa_yadollahi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Parsa Yadollahi</Typography>
                <Typography className={classes.position}>Front-End Lead</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                Parsa is a third year Computer Science student
                interested in software engineering and quantitative finance,
                and being the six-quatre waste yute lord.
          </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item justify="center" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={mohamed_beydoun} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>Mohamed Beydoun</Typography>
                <Typography className={classes.position}>Back-End Lead</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                U3 Computer Science student with interest in Cloud and Web development,
                as well as robotics. I spend most of my time rock climbing,
                gaming, and building weird robots.
            </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item container justify="center" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
            <Grid item xs={6}>
                <img src={parsa_yadollahi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Simon Berens</Typography>
                <Typography className={classes.position}>Back-End Lead</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                Simon is a second year computer science student interested in compilers,
                distributed systems and competitive programming. He spends his time reading,
                playing ping pong, and typing on his dactyl manuform.
          </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item container justify="center" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
            <Grid item xs={6}>
                <img src={parsa_yadollahi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Jenna Latiok</Typography>
                <Typography className={classes.position}>Communications Lead</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                Fourth year comp and neuroscience student.
                Low key music critic and meme enthusiast.
          </Typography>
            </Grid>
          </Grid>
          {/* </Grid> */}


          <Grid item container justify="center" xs={12}>
            <Typography className={classes.not_lead} >
              Developers
            </Typography>
          </Grid>

          {/* <Grid container item xs={12} spacing={3} className="team"> */}
          <Grid xs={4} item justify="left" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={pulasthi_peiris} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Pulasthi Peiris</Typography>
                <Typography className={classes.position}>Front-End Developer</Typography>
              </Grid>
            </Grid>
            <Grid item container s={6}>
              <Typography className={classes.description}>
                Pulasthi is a second year EE student with interests in embedded systems design
                and full stack development. He loves cheesecake, speaks at 40 Hz 
                at times, and enjoys automating things to make life easier.
          </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item container justify="left" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={julie_tian} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Julie Tian</Typography>
                <Typography className={classes.position}>Back-End Developer</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                I build keyboards.
          </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item justify="center" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={saba_fathi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos}>
                <Typography className={classes.name}>Saba Fathi</Typography>
                <Typography className={classes.position}>Front-End Developer</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                2 bugs fixed, 14 bugs found. First year SWE student.
                Saba is a first year software engineering student and is
                interested in the gaming industry, cursed memes and is the embodiment of 🗿.
                Rumor has it, he lives off steak.
            </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item container justify="center" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={parsa_yadollahi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Cole Killian</Typography>
                <Typography className={classes.position}>Back-End Developer</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                Fellow Math and Comp Sci Student.
                Enjoys hiking, guitar, building full stack apps,
          and competitive programming. Aspiring blogger, ask me about org mode {":)"}
              </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item container justify="center" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={parsa_yadollahi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Changjun Zhou</Typography>
                <Typography className={classes.position}>Front-End Developer</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                U2 SWE student, a secret guy who is trying to find how to use docker.
          </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item container justify="center" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={parsa_yadollahi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Michael Li</Typography>
                <Typography className={classes.position}>Back-End Developer</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                U3 SWE student, enjoy watching and playing fútbol, hala madrid ⚽
          </Typography>
            </Grid>
          </Grid>

          <Grid xs={4} item container justify="center" className={classes.individual} direction="row">
            <Grid className={classes.box} item container justify="center" direction="row">
              <Grid item xs={6}>
                <img src={parsa_yadollahi} className={classes.profile_pic} />
              </Grid>
              <Grid item xs={6} className={classes.name_pos} >
                <Typography className={classes.name}>Agent Smith</Typography>
                <Typography className={classes.position}>Virus</Typography>
              </Grid>
            </Grid>
            <Grid item s={6}>
              <Typography className={classes.description}>
                Never send a human to do a machine's job. We are placeholders for future members...
          </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}

export default Team;