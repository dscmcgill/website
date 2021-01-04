import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CustomizedCard from '../components/CustomizedCard';
import ExpandButton from '../components/ExpandButton';

import { timeline } from './../static/constants/Constants';
import { Icon } from '@material-ui/core';

function PastEvents() {
  return (
    <Timeline align="alternate">
      {timeline.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {item.time}
            </Typography>
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
