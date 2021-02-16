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

    content:{

        '& .MuiTypography-body2':{
            display:'flex',
        },
    },

}));


export default function NewsBox({ autor, ...post }){
    const classes = useStyles();
    const [ wrapContent, __] = React.useState(post.content.length>200);
    const unWrapContent=()=>__(false);
    const content = post.content.substring(0, ...(wrapContent?[200]:[]));

    return (<Container maxWidth="sm">
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar alt={autor.name}
                src={'/images/avatar.jpg'} />}
                title={autor.name}
                subheader="Hace un momento"
                />

            <CardContent className={classes.content}>
                <Typography variant="body1" children={post.title} gutterBottom />
                <Typography variant='body2' color='textSecondary' component='p' >
                    {content}
                    {wrapContent && <span href="#" onClick={unWrapContent} children="... ver más." />}
                </Typography>
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