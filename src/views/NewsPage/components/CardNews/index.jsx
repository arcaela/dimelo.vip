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
import { Box, Container } from '@material-ui/core';
import { useCardStyles } from './cardNews.styles';

import AvatarImg from '../../../../dist/images/avatar.jpg'
import { Favorite } from '@material-ui/icons';

export default function CardNews({ likes = 0, like = false, autor: { name }, title, description, pictures }) {
  const img = [AvatarImg, AvatarImg, AvatarImg]
  const classes = useCardStyles();
  const [favorite, _setFav] = React.useState({ like, likes })
  const setFav = (o) => _setFav(p => ({...p,...o}))
  return (
    <Container maxWidth='sm'>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt={name} src={AvatarImg} />
          }
          title={name}
          subheader='22 Dic 2020 at 3:46 PM'
        />
        <CardContent>
          <Typography variant="h6" children={title} component="h2" gutterBottom />
          <Typography variant='body2' children={description} color='textSecondary' component='p' />
        </CardContent>
        <Box m={2}>
          <Photogrid
            className={classes.media}
            images={pictures} //required
          // width='96%'
          ></Photogrid>
        </Box>
        <CardActions className={classes.actions} disableSpacing>
          <div>
            <IconButton onClick={() => setFav({likes:(favorite.likes + (favorite.like ? -1:1 )),like: !favorite.like})} aria-label='add to favorites' color='secondary' >
              {favorite.like ? <Favorite /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>
            <span>
              {favorite.likes}
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
    </Container>
  );
}
