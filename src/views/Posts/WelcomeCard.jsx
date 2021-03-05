import React from 'react';
import {
    Card,
    makeStyles,
    CardHeader,
    CardMedia,
    CardContent,
    Avatar,
    Typography,
} from '@material-ui/core';
import DimeloIcon from '~/images/logo/32x32.png';
import DimeloWallpaper from '~/images/WELCOME.png';


const useStyles = makeStyles(() => ({
  root: { },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={ <Avatar src={ DimeloIcon } /> }
        title="Dimelo VIP"
        subheader="Administrador del sitio"
      />
      <CardMedia className={classes.media} image={ DimeloWallpaper } title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            El equipo de desarrollo de <a href="/">dímelo.vip</a> te brinda una cordial bienvenida a la plataforma,
            con gusto nos conoceremos más.
        </Typography>
      </CardContent>
    </Card>
  );
}
