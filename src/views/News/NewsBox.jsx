import React from 'react'
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    IconButton,
    makeStyles,
    Typography,
} from '@material-ui/core';
import {
    Favorite,
    FavoriteBorderOutlined,
    ShareOutlined,
} from '@material-ui/icons';



const useStyles = makeStyles(()=>({

    root:{},
    actions:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },

    wrapContent:{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
}));


export default function NewsBox({ autor, ...post }){
    const classes = useStyles();
    const [ wrapContent, ] = React.useState(true);




    return (<Container maxWidth="sm">
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar alt={autor.name}
                src={'/images/avatar.jpg'} />}
                title={autor.name}
                subheader="Hace un momento"
                />
            <CardContent>
                <Typography variant="body1" children={post.title} gutterBottom />
                <Typography
                    variant='body2'
                    children={post.content.substring(0, ...(wrapContent?[200]:[]))}
                    className={wrapContent?classes.wrapContent:''}
                    color='textSecondary' component='p' />

            </CardContent>
            <CardActions className={classes.actions}>
                <div>
                    <IconButton
                        size="small"
                        color={post.likes.me?'secondary':'primary'}
                        children={post.likes.me?<Favorite />:<FavoriteBorderOutlined />} />
                    <span> 15 </span>
                </div>
                <Button color="primary" variant="outlined" size="small">
                    Compartir <ShareOutlined color="secondary" />
                </Button>
            </CardActions>
        </Card>
    </Container>);
}