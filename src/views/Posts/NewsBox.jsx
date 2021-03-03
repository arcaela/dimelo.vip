import React from 'react'
import PhotoGrid from 'react-facebook-photo-grid'

import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    makeStyles,
    Typography,
} from '@material-ui/core';


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


export default ({ post })=>{
    const classes = useStyles();
    const [ wrapContent, __] = React.useState(post.content.length>200);
    const unWrapContent=()=>__(false);
    const content = post?.content?.substring(0, ...(wrapContent?[200]:[]));
    return post && (<Card className={classes.root}>
        <CardHeader
            avatar={<Avatar alt={post.autor?.name} src={post.autor?.photoURL || post.autor?.fullname[0]} />}
            title={post.autor?.fullname}
            subheader={timeAgo.format( post.timestamp?.toDate() || new Date() )}
        />
        <CardContent className={classes.content}>
            <Typography variant="body1" children={post.title} gutterBottom />
            <Typography variant='body2' color='textSecondary' component='p' >
                {content}
                {wrapContent && <span href="#" onClick={unWrapContent} children="... ver más." />}
            </Typography>
            <PhotoGrid images={ post.media }></PhotoGrid>
        </CardContent>
        <CardActions className={classes.actions}> </CardActions>
    </Card>);
};