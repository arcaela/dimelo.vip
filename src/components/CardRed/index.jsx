import React from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

import Delete from '../../assets/images/trash.svg';
import Edit from '../../assets/images/edit.svg';
import { useCardRed } from './cardRed.styles';

import AvatarImg from '../../assets/images/avatar.jpg'



export default function CardRed() {

    const classes = useCardRed() 

    return (
        <Card className={ classes.container }>
            <div className={ classes.avatarContainer }>
                <Avatar className={ classes.large } src={ AvatarImg } />
            </div>

            <div className={ classes.cardContainer }>

                <div className={ classes.pRelative }>
                    <CardHeader title="Maria Perez"/>
                    <div className={ classes.actionsHeader } >
                        <IconButton>
                            <img src={ Edit } alt="Editar"/>
                        </IconButton>
                        <IconButton>
                            <img src={ Delete } alt="eliminar"/>
                        </IconButton>
                    </div>
                </div>
                <CardContent>
                    <Typography color="textSecondary">
                        Dirección: Los Colores - Medellín
                    </Typography>
                    <Typography color="textSecondary">
                        Teléfono : +578715674877
                    </Typography>
                    <Typography color="textSecondary">
                        Email: maria125d@gmail.com
                    </Typography>
                    <Typography color="textSecondary">
                        Punto de votación: Escuela Bustamante
                    </Typography>
                </CardContent>
                <div className={ classes.pRelative }>
                    <CardActions>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                    </CardActions>
                    <span className={ classes.perfil }>
                        Pensamiento introvertido
                    </span>
                </div>
            </div>

        </Card>
    )
}
