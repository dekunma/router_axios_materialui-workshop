import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: '400px',
      margin: 20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const MyCard = (props) => {

    // React hooks
    const classes = useStyles();

    const viewDetail = (postId) => {
        window.location = `/posts/${postId}`
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                A post
                </Typography>
                <Typography variant="h5" component="h2">
                {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                {props.body}
                <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">By: {props.userId}</Button>
                {props.disableDetail
                ? <React.Fragment />
                : <Button onClick={ev => viewDetail(props.id)}>View Detail</Button>
                }
            </CardActions>
        </Card>
    )
}

export default MyCard