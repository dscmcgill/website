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

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '35px 0px',
    backgroundColor: theme.palette.primary.dark
  },
  icons: {
    '& svg': {
      fontSize: '35px'
    },
    '&:hover': {
      color: theme.textColors.blue,
      boxShadow: 'none'
    }
  },
  bottomText: {
    color: theme.textColors.grey,
    textAlign: 'center',
    fontSize: theme.fontSize.sixteen
  },
  bottomTextHref: {
    color: theme.textColors.grey,
    textAlign: 'center',
    fontSize: theme.fontSize.sixteen,
    transition: 'all .3s ease',
    '&:hover': {
      color: theme.textColors.blue,
      fontSize: theme.fontSize.eighteen
    }
  },
  a: {
    color: 'inherit',
    textDecoration: 'inherit'
  }
}));

function Footer() {
  const emailUrl = 'mailto:mcgilldsc@gmail.com';
  const facebookUrl = 'https://www.facebook.com/dscmcgill';
  const instaUrl = 'https://www.instagram.com/dscmcgill/';
  const linkedInUrl = 'https://www.linkedin.com/company/developerstudentclubs/';
  const classes = useStyles();

  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  const icons = [
    <EmailIcon onClick={() => handleClick(emailUrl)} />,
    <FacebookIcon onClick={() => handleClick(facebookUrl)} />,
    <InstagramIcon onClick={() => handleClick(instaUrl)} />,
    <LinkedInIcon onClick={() => handleClick(linkedInUrl)} />
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
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.bottomText}
      >
        © Developer Student Clubs McGill University 2021
      </Typography>
      <a
        href="https://forms.gle/2Tb7QYcEfoFRnHgw8"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.a}
      >
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.bottomTextHref}
        >
          Subscribe to our newsletter here!
        </Typography>
      </a>
      <br />
    </div>
  );
}

export default Footer;
