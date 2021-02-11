import React, { useState } from 'react'

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
import MessageIcon from '@material-ui/icons/Message';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import Delete from '../../../images/trash.svg';

import AvatarImg from '../../../images/avatar.jpg'

import { useCardLider } from './lider.styles';
import LiderModal from './LiderModal';



export default function LiderCard() {

    const classes = useCardLider()

    const [open, setOpen] = useState(false)



    return (
        <>        
            <Card className={ classes.container }>
                <div className={ classes.avatarContainer }>
                    <Avatar className={ classes.large } src={ AvatarImg } />
                </div>
                <div className={ classes.cardContainer }>
                    <div className={ classes.pRelative }>
                        <CardHeader title="Maria Perez"/>
                        <div className={ classes.actionsHeader } >
                            <IconButton>
                                <img src={ Delete } alt="eliminar"/>
                            </IconButton>
                        </div>
                    </div>
                    <CardContent className={ classes.pr }>
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
                        <div onClick={ ()=>{ setOpen(!open) } } className={ classes.group }>
                            <span className={ classes.iconContainer }>
                                <PeopleAltIcon className={ classes.icon } />
                            </span>
                            <span>
                                +56
                            </span>
                        </div>
                    </CardContent>
                </div>
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
                        <IconButton>
                            <MessageIcon />
                        </IconButton>
                    </CardActions>
                    <span className={ classes.perfil }>
                        Pensamiento introvertido
                    </span>
                </div>
            </Card>
            <LiderModal open={ open } setOpen={ setOpen } />
        </>
    )
}
