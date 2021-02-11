import React, { useEffect, useState } from 'react'

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
import MessageIcon from '@material-ui/icons/Message';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import Delete from '../../../images/trash.svg';
import AvatarImg from '../../../images/avatar.jpg'

import { useCardLider } from './lider.styles';
import LiderModal from './LiderModal';

import firebase from '../../../config/firebase.js'

export default function LiderCard({ leader }) {

    const classes = useCardLider()

    const [open, setOpen] = useState(false)
    
    const [followers, setFollowers] = useState(null)

    const handlerOpen = () => {
        if(followers.length === 0) return;
        setOpen(!open)
    }


    const {
        direccion = '',
        email = '',
        movil = '',
        voting_point = '',
        name = '',
        lastname = '',
        uid = null
     } = leader;


     useEffect(() => {
        const getLeaders = async () => {
          if(!uid)return;
          try {
            const leaders = firebase.firestore();
    
            const users = await leaders.collection('users').where('voting_leader', '==', uid).get();
    
            setFollowers( users.docs.map( e =>e.data() ) )
    
          } catch (e) {
            console.log(e)
          }
        }
        getLeaders();
      }, [uid])


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
                            {followers && (  
                                <div onClick={ ()=>{ handlerOpen() } } className={ classes.group }>
                                    <span className={ classes.iconContainer }>
                                        <PeopleAltIcon className={ classes.icon } />
                                    </span>
                                    <span>
                                        +{followers.length}
                                    </span>
                                </div>
                            )}
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
                    <CardActions>
                        {/* <IconButton>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton> */}
                        <IconButton>
                            <MessageIcon />
                        </IconButton>
                    </CardActions>
                    <span className={ classes.perfil }>
                        Pensamiento introvertido
                    </span>
                </div>
            </Card>
            { open && <LiderModal leader={leader} followers={followers} open={ open } setOpen={ setOpen } /> }
        </>
    )
}
