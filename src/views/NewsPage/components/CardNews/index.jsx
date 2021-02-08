import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Photogrid from "react-facebook-photo-grid";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import {Box} from '@material-ui/core';
import { useCardStyles } from './cardNews.styles';

import AvatarImg from '../../../../dist/images/avatar.jpg'
import Video from '../../../../dist/images/search.mp4'
export default function CardNews({ title }) {
  const img = [AvatarImg,AvatarImg,Video,AvatarImg]
  const classes = useCardStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Jesús Ramírez" src={AvatarImg} />
        }
        title={title}
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
      <Box m={2}>
      <Photogrid
        className={classes.media}
        images={img} //required
        // width='96%'
      ></Photogrid>
      </Box>
      <CardActions className={classes.actions} disableSpacing>
        <div>
          <IconButton aria-label='add to favorites'>
            <FavoriteBorderOutlinedIcon />
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
            <ShareIcon color='secondary' />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
