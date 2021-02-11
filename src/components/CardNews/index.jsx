import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { useCardStyles } from './cardNews.styles';

import AvatarImg from '../../images/avatar.jpg'

export default function CardNews() {

  const classes = useCardStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Jesús Ramírez" src={ AvatarImg } />
        }
        title='Jesús Ramírez'
        subheader='22 Dic 2020 at 3:46 PM'
      />
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image='/static/images/cards/paella.jpg'
        title='Paella dish'
      />
      <CardActions className={ classes.actions } disableSpacing>
        <div>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <span>
            59
          </span>
        </div>
        <div>
          <span>
            Compartir
          </span>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
