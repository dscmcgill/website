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

import logo from '../images/dsc_logo.svg';

import AdbIcon from '@material-ui/icons/Adb';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const timeline = [
  {
    time: '2019.12.01',
    image: logo,
    icon: <FastfoodIcon />,
    title: 'title1',
    subheader: 'subheader1',
    content: `ey, altKey, metaKey, ge
  rState, button, butjqnwdkjnsacn
  qwdjer a collection of`
  },
  {
    time: '2019.12.02',
    image: logo,
    icon: <AdbIcon />,
    title: 'title2',
    subheader: 'subheader2',
    content: `dqwjdqlwldmlkqmskcmls
  qwdijqoiejdqkckljneiojdfojqoeljcf
  qwoifdjoiqejfclqnejnlcfjqwndlj`
  },
  {
    time: '2019.12.03',
    image: logo,
    icon: <AdbIcon color="secondary" />,
    title: 'title3',
    subheader: 'subheader3',
    content: `qoifhjcioqejfoicnjqew
  qwudhuqehfchqeoijhfdpiqjwpfijcqew
  qeijfdoiqejlcffiocijfe`
  }
];

function PastEvents() {
  const mystyle = {
    //put your style here
  };

  return (
    <div style={mystyle}>
      <Timeline align="alternate">
        {timeline.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {item.time}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>{item.icon}</TimelineDot>
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
    </div>
  );
}

function PastEventsPanel() {
  const mystyle = {
    //put your style here
  };
  return (
    <div style={mystyle}>
      <ExpandButton title="Past Events" content={PastEvents()} />
    </div>
  );
}
export default PastEventsPanel;
