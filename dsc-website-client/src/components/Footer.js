import React from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  container: {
    marginBottom: '35px'
  },
  icons: {
    '& svg': {
      fontSize: '35px'
    }
  },
  bottomText: {
    color: '#686c70',
    textAlign: 'center',
    fontSize: '18px',
    fontFamily: 'Product Sans'
  }
});

function Footer() {
  const classes = useStyles();
  const handleClick = (url) => {
    // do something meaningful, Promises, if/else, whatever, and then
    window.open(url, '_blank');
  };
  const icons = [
    <EmailIcon onClick={() => handleClick('mailto:mcgilldsc@gmail.com')} />,
    <FacebookIcon
      onClick={() => handleClick('https://www.facebook.com/dscmcgill')}
    />,
    <InstagramIcon
      onClick={() => handleClick('https://www.instagram.com/dscmcgill/')}
    />,
    <LinkedInIcon
      onClick={() =>
        handleClick('https://www.linkedin.com/company/developerstudentclubs/')
      }
    />
  ];

  const display_icons = icons.map((icon) => {
    return (
      <IconButton size="medium" className={classes.icons}>
        {icon}
      </IconButton>
    );
  });

  return (
    <div id="joinus" className={classes.container}>
      <Grid container direction="row" justify="center" alignItems="center">
        {display_icons}
      </Grid>
      <Typography className={classes.bottomText}>
        © Developer Student Clubs McGill University 2021
      </Typography>
      <br />
    </div>
  );
}

export default Footer;
