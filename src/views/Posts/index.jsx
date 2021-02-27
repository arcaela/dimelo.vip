import React from "react";
import { CircularProgress, Container, makeStyles } from "@material-ui/core";
import Layout from "../layout";
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
    const [ posts,setPosts ] = React.useState([]);
    const loading = !posts.length;

    React.useEffect(()=>{
        if(user && !posts.length)
            api('posts/all',{user}).then(docs=>setPosts(docs));
    }, [ user, posts ]);

    return (<Layout middleware={['auth']}>
        <Container maxWidth="sm" children={posts.filter(p=>!!p).map((post,key)=><NewsBox post={post} key={key}/>)} />
        {loading&&(<div className={ classes.loading } children={<CircularProgress size={25} />} />)}
    </Layout>);
}