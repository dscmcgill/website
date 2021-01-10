import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles } from '@material-ui/core';

// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  }
})(MuiAccordion);

const useStyle = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    backgroundColor: theme.textColors.blue,
    fontSize: theme.fontSize.twelve,
    color: theme.textColors.white,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.textColors.blue
    }
  }
}));

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [iconChange, setIcon] = React.useState(false);
  const classes = useStyle();

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      style={{ border: 'none', backgroundColor: '#fafafa', margin: 0 }}
      expanded={expanded}
      onChange={handleChange(!expanded)}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
            height: 0,
            margin: 20
          }}
        >
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => setIcon(!iconChange)}
          >
            {iconChange ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            See our past events
          </Button>
        </AccordionSummary>
      </Grid>
      <AccordionDetails>
        <Grid container justify="center" alignItems="center">
          {props.content}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
