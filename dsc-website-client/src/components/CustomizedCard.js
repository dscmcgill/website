import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// @para: title subheader content
export default function MediaCard(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      float: props.float
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    }
  }));

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={props.title} subheader={props.subheader} />
      <CardMedia className={classes.media} image={props.image} />
      <CardContent>
        <Typography variant="body2" component="p">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
