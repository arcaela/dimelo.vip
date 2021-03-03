import React from "react";
import { CircularProgress, Container, makeStyles } from "@material-ui/core";
import Layout from "~/views/layout";
import NewsBox from "./NewsBox";
import api from "~/ServerLess/utils/api";
import useAuth from "~/ServerLess/hooks/useAuth";


const useStyles = makeStyles(()=>({
    loading:{
        padding:'10px 0',
        textAlign:'center',
    },
}));


export default function NewsPage(){
    const user = useAuth();
    const classes = useStyles();
    const wall = React.useRef(null);
    const [ posts, setPosts ] = React.useState([]);
    const getPosts = React.useCallback(async ()=>{
        api('posts/recents', { user, posts })
            .then(docs=>setPosts(d=>d.concat(docs)));
    }, [ user, posts ]);

    React.useEffect(()=>{
        
        console.log(posts);

        if(user && !posts.length)
            getPosts();
    }, [ user, posts ]);

    return (<Layout middleware={['auth']}>
        <Container ref={wall} maxWidth="sm"
            children={posts.map((post,key)=><NewsBox post={post} key={key}/>)}
        />
        {!posts.length&&(<div className={ classes.loading } children={<CircularProgress size={25} />} />)}
    </Layout>);
}