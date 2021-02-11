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
import { Box, Container, makeStyles } from '@material-ui/core';
import useFormatDate from '../../hooks/useFormatDate'
import AvatarImg from '../../../../images/avatar.jpg'
import { Favorite } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';




const useStyles = makeStyles({
  root: { margin:'20px 0px', },
  media: { height: 0, paddingTop: '56.25%', margin:'3%', borderRadius:'15px' },
  avatar: { backgroundColor: red[500], },
  actions: { justifyContent: 'space-between' },
  description:{
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    '& .is-block':{ WebkitLineClamp: 'none', },
  },
});



export default function CardNews({
  autor:{name, photoURL},
  title,
  date,
  description,
  pictures,
  like:{ count = 0, me = false, },
  openDialog = ()=>{},
}) {
  const classes = useStyles();
  date = useFormatDate(date)


  const [ like , _setLike] = React.useState(like);
  const setLike = (s)=>_setLike(p=>({...p,...s}));
  const onLike = ()=>{};

  const [open, setOpen] = React.useState(false);


  return (<Container maxWidth="sm">
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar alt={name} src={photoURL} />} title={name} subheader={date} />
      <CardContent>
        <Typography variant="h6" children={title} component="h2" gutterBottom />
        <Typography className={clsx(classes.description, display && 'is-block')} variant='body2' children={description} color='textSecondary' component='p' />
        <Box m={2} children={<Photogrid className={classes.media} images={pictures} />} />
        <CardActions className={classes.actions} disableSpacing>
          <div>
            <IconButton onClick={onLike} aria-label='add to favorites' color='secondary' >
              { like.me ? <Favorite /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>
            <span>{ like.count }</span>
          </div>
          <div>
            <span> Compartir </span>
            <IconButton onClick={()=>dialogToggle()} aria-label='share'>
              <ShareIcon color='secondary' />
            </IconButton>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  </Container>);
}
