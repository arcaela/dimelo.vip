import React from "react";
import { CircularProgress, Container, makeStyles } from "@material-ui/core";
import Layout from "../layout";
import NewsBox from "./NewsBox";
import api from "~/ServerLess/api";
import useAuth from "~/ServerLess/Hooks/useAuth";


const useStyles = makeStyles(()=>({
    loading:{
        padding:'10px 0',
        textAlign:'center',
    },
}));


export default function NewsPage(){
    const classes = useStyles();
    const [ posts,setPosts ] = React.useState(null);
    const loading = (!posts || !posts.length);
    const user = useAuth();
    React.useEffect(()=>{
        if(!posts)
            api('posts/all',{user}).then(docs=>setPosts(docs));
    }
    , [user, posts, setPosts]);
    return (<Layout middleware={['auth']}>
        <Container maxWidth="sm" children={(posts||[]).map((post,key)=><NewsBox {...post} key={key}/>)} />
        {loading&&(<div className={ classes.loading } children={<CircularProgress size={25} />} />)}
    </Layout>);
}