import React from 'react'
import PhotoGrid from 'react-facebook-photo-grid'

import {
    Avatar,
    // Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    // IconButton,
    makeStyles,
    Typography,
} from '@material-ui/core';
// import {
    // Favorite,
    // FavoriteBorderOutlined,
    // ShareOutlined,
// } from '@material-ui/icons';


import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
TimeAgo.addDefaultLocale(es);
const timeAgo = new TimeAgo('es-ES')


const useStyles = makeStyles(theme=>({
    root:{
        marginBottom: 15
    },
    actions:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    content:{
        '& .MuiTypography-body2 > span':{
            color:theme.palette.primary.main,
            cursor:'pointer'
        },
        '& > div:last-child':{
            margin:'10px 0',
        },
    },
}));


export default React.memo(function NewsBox({post=null}){
    const classes = useStyles();
    const [ wrapContent, __] = React.useState(post && post.content.length>200);
    if(!post) return null;
    const { autor } = post;
    const unWrapContent=()=>__(false);
    const content = post.content.substring(0, ...(wrapContent?[200]:[]));

    return (<Card className={classes.root}>
        <CardHeader
            avatar={<Avatar alt={autor?.name} src={autor?.photoURL || autor?.fullname[0]} />}
            title={autor?.fullname}
            subheader={timeAgo.format( post.timestamp?.toDate() || new Date() )}
        />
        <CardContent className={classes.content}>
            <Typography variant="body1" children={post.title} gutterBottom />
            <Typography variant='body2' color='textSecondary' component='p' >
                {content}
                {wrapContent && <span href="#" onClick={unWrapContent} children="... ver más." />}
            </Typography>
            <PhotoGrid images={post.media?.flat()}></PhotoGrid>
        </CardContent>
        <CardActions className={classes.actions}>
{/*
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
 */}
        </CardActions>
    </Card>);
});