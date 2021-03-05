import React from 'react'
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


export default function NewsBox({ post }){
    const classes = useStyles();
    const [ wrapContent, __] = React.useState(post.content.length>200);
    const unWrapContent=()=>__(false);
    const content = post.content.substring(0, ...(wrapContent?[200]:[]));
    return post && (<Card className={classes.root}>
        <CardHeader
            title={post.autor.fullname}
            subheader={ post.timestamp ? timeAgo.format( post.timestamp.toDate() ) : 'Hace unos segundos' }
            avatar={<Avatar alt={post.autor?.name} src={ post.autor.photoURL || post.autor.fullname[0] } />}
        />
        <CardContent className={classes.content}>
            <Typography variant="body1" children={post.title} gutterBottom />
            <Typography variant='body2' color='textSecondary' component='p' >
                {content}
                {wrapContent && <span href="#" onClick={unWrapContent} children="... ver más." />}
            </Typography>
        </CardContent>
        { post.media?.length && <CardMedia className={classes.media} image={ post.media[0] } title={post.title} /> }
    </Card>);
};
