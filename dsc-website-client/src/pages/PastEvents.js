import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CustomizedCard from '../components/CustomizedCard';
import ExpandButton from '../components/ExpandButton';

import { pastEvents } from './../static/constants/Constants';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark
  }
}));

function PastEvents() {
  const classes = useStyles();
  return (
    <Timeline align="alternate" className={classes.root}>
      {pastEvents.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="body2">{item.time}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            {item.icon}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box>
              <CustomizedCard
                float={index % 2 === 0 ? 'left' : 'right'}
                title={item.title}
                subheader={item.subheader}
                content={item.content}
                image={item.image}
              />
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
function PastEventsPanel() {
  return <ExpandButton title="Past Events" content={PastEvents()} />;
}
export default PastEventsPanel;
