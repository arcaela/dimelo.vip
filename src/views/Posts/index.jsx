import React from "react";
import NewsBox from "./NewsBox";
import Layout from "~/views/layout";
import WelcomeCard from "./WelcomeCard";
import { api, useAuth } from "~/ServerLess";
import { Button, CircularProgress, Container } from "@material-ui/core";



const $posts = [];
export default function NewsPage(){
    const user = useAuth();
    const wall = React.useRef(null);
    const [ posts, setPosts ] = React.useState($posts);
    const [ loading, setLoading ] = React.useState(null);
    const getPosts = React.useCallback(()=>{
        if(!loading) setLoading(true);
        api('posts/recents', { user, after:posts })
            .then(docs=>{
                $posts.push(...docs);
                setPosts($posts);
            })
            .finally(()=>setLoading(false));
    }, [ loading, user, posts, setPosts ]);
    return (<Layout middleware={['auth']}>
        <Container ref={wall} maxWidth="sm">
            { !posts.length && <WelcomeCard /> }
            { posts.map((post)=><NewsBox post={post} key={post.id} />) }
            <Button
                fullWidth
                color="primary"
                variant="outlined"
                disabled={ loading }
                style={{marginTop:10}}
                onClick={()=>getPosts()}
                children={ loading?<CircularProgress size={20} />:'Cargar más' } />
        </Container>
    </Layout>);
}