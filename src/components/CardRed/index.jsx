import React from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';

import Delete from '../../images/trash.svg';

import { useCardLider } from '~/views/AdminPage/components/lider.styles';
import usePatron from '~/hooks/usePatron';

 

export default function CardRed({ users }) {

    const patron = usePatron( users?.patron ) 

    const classes = useCardLider({ color: patron.color }) 

    const {
        direccion = '',
        email = '',
        movil = '',
        voting_point = '',
        name = '',
        lastname = ''
     } = users;

    return (
        <>        
            <Card className={ ` ${ classes.container } ${ classes.pRelative } `}>
                <div className={ classes.body }>
                    <div className={ classes.avatarContainer }>
                        
                        <Avatar 
                        className={ classes.large }
                        children={ name ? name[0] : lastname[0] } />
                    </div>
                    <div className={ classes.cardContainer }>
                        <div >
                            <CardHeader className={ classes.truncate } title={ ` ${ name } ${ lastname } ` } />
                            <div className={ classes.actionsHeader } >
                                <IconButton>
                                    <img src={ Delete } alt="eliminar"/>
                                </IconButton>
                            </div>
                        </div>
                        <CardContent>
                            <Typography color="textSecondary">
                                Dirección: { direccion }
                            </Typography>
                            <Typography color="textSecondary">
                                Teléfono : { movil }
                            </Typography>
                            <Typography color="textSecondary">
                                Email: { email }
                            </Typography>
                            <Typography color="textSecondary">
                                Punto de votación: { voting_point }
                            </Typography>

                        </CardContent>
                    </div>
                </div>
                <div className={ classes.pRelative }>
                    <CardActions style={{
                        padding: 0,
                        justifyContent: 'flex-end'
                    }}>
                        {/* <IconButton>
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
                        </IconButton> */}
                    {users?.patron && <span className={ classes.newPerfil }>
                        { patron.label }
                    </span>}
                    </CardActions>
                </div>
            </Card>
        </>
    )
}
