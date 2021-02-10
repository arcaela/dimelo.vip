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
import useFormatDate from '../../hooks/useFormatDate'
import AvatarImg from '../../../../dist/images/avatar.jpg'
import { Favorite } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { clamp } from 'lodash';

<<<<<<< HEAD
export default function CardNews({ likes = 0, like = false, autor: { name }, title, description, pictures, date }) {
=======
export default function CardNews({ likes = 0, like = false, autor: { name }, title, description, pictures }) {
  const classes = useCardStyles();
>>>>>>> 44a67613db36d241f7e91fbb427af9f94a1f0303
  const [favorite, _setFav] = React.useState({ like, likes })
  const [copy, setCopy] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [lineClamp, setLineClamp] = React.useState(true);
  const classes = useCardStyles();
  const setFav = (o) => _setFav(p => ({ ...p, ...o }))
  const newDate = useFormatDate(date)
  const img = [AvatarImg, AvatarImg, AvatarImg]
  const copyLink = () => {
    var copyText = document.querySelector("#copy-text");
    copyText.select();
    document.execCommand("copy");
    setCopy(true)
    setTimeout(() => setCopy(false), 4000)
  }
  return (
    <Container maxWidth='sm'>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt={name} src={AvatarImg} />
          }
          title={name}
          subheader={newDate}
        />
        <CardContent>
          <Typography variant="h6" children={title} component="h2" gutterBottom />
          <Typography style={!lineClamp ? {} : {
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
            variant='body2' children={description} color='textSecondary' component='p' />
          {lineClamp && description.length > 300 && <Typography component="span" color="primary" onClick={() => setLineClamp(false)} style={{ fontSize: '16px', cursor:'pointer' }} children="Leer más" />}
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
            <IconButton onClick={() => setFav({ likes: (favorite.likes + (favorite.like ? -1 : 1)), like: !favorite.like })} aria-label='add to favorites' color='secondary' >
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
            <IconButton onClick={() => setOpen(!open)} aria-label='share'>
              <ShareIcon color='secondary' />
            </IconButton>
          </div>
        </CardActions>
      </Card>
      <div>
        <Dialog open={open} onClose={() => setOpen(!open)} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Compartir</DialogTitle>
          <DialogContent style={{ width: '360px' }}>
            <DialogContentText>
              Para compartir esta noticia copie el link
          </DialogContentText>
            <TextField
              readonly
              id="copy-text"
              onClick={copyLink}
              autoFocus
              margin="dense"
              value='https://dimelo.vip/share-new/2nw9cwhc9wh81bc19cwbc81bwc9b'
              label="Link"
              type="text"
              fullWidth
            />
            {copy && <span children="Copiado" style={{ color: 'gray' }} />}
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={copyLink} color="primary">
              Copiar
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
}
