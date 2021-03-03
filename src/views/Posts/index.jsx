import React from "react";
import NewsBox from "./NewsBox";
import Layout from "~/views/layout";
import api from "~/ServerLess/utils/api";
import useAuth from "~/ServerLess/hooks/useAuth";
import { CircularProgress, Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(()=>({
    loading:{
        padding:'10px 0',
        textAlign:'center',
    },
}));
const onproccess = {current:false};
export default function NewsPage(){
    const user = useAuth();
    const classes = useStyles();
    const wall = React.useRef(null);
    const [ posts, setPosts ] = React.useState([]);
    const [ loading, setLoading ] = React.useState(false);
    const getPosts = React.useCallback(()=>{
        if(!loading) setLoading(onproccess.current=true);
        api('posts/recents', {user,posts})
            .then(docs=>setPosts(posts.concat(docs)))
            .finally(()=>setLoading(onproccess.current=false));
    }, [ user, posts ]);
    const AddListener = React.useCallback(()=>{
        if(!onproccess.current && wall.current.getBoundingClientRect().bottom < 640)
            getPosts();
    }, [ wall, getPosts ])
    React.useEffect(()=>{
        if(user && !posts.length) getPosts();
        window.addEventListener('scroll', AddListener);
        return ()=> window.removeEventListener('scroll', AddListener);
    });
    return (<Layout middleware={['auth']}>
        <Container ref={wall} maxWidth="sm">
            { posts.map((post)=><NewsBox post={post} key={post.id} />) }
            { loading && <div className={ classes.loading } children={<CircularProgress size={25} />} /> }
        </Container>
    </Layout>);
}