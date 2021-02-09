import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core'
import { useCardStyles } from './createNew.styles';
import CardNews from '../CardNews'
export default function CreateNew() {
    const classes = useCardStyles();
    const [posts, /* setPosts */] = React.useState([{likes:56, like:true, autor:{name:'Boris'},title:'Titulo', description:'Description', pictures:[]}]);
    React.useEffect(() => {
        console.log('Componente renderizado')
        // api('news/recent')
        //     .then(result => setPosts(result))
        //     .catch()
    }, [])
    const [post, _setPost] = React.useState({autor:{name:'Boris'}});
    const setPost = (object) => _setPost(p => ({...p, ...object}))
    const getImg = ({target}) => {
        const reader = new FileReader();
        reader.onload = ({target:{result}}) => {
            setPost({pictures:[result]})
        }
        reader.readAsDataURL(target.files[0]);
    } 
    const create = () => {
        
        // api('news/publish', post).then(post => setPosts(p => p.concat(post?[post]:[]))).catch(err => console.log(err))
    };
    console.log(posts, post)
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardHeader
                    title={'Crear noticia'}
                />
                <CardContent>
                        <Box>
                            <TextField value={post.title || ''} onChange={({target: {value}}) => setPost({title:value})} className={classes.input} id="standard-basic" label="Titulo" />
                        </Box>
                        <Box mt={4}>
                            <TextField className={classes.input}
                                value={post.description || ''} onChange={({target: {value}}) => setPost({description:value})}
                                id="outlined-multiline-static"
                                label="Descripción"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Box>
                        <Box mt={4}>
                            <label>Subir imagen o video</label>
                            <TextField type='file' onChange={getImg} variant="outlined" inputProps={{ multiple: true }} className={classes.input} />
                        </Box>
                        <Box mt={4}>
                            <Button type="submit" onClick={create} variant="contained" color='primary'>Crear</Button>
                        </Box>
                </CardContent>
            </Card>
            {posts.map((post, key) => <CardNews {...post} key={key} />)}
        </React.Fragment>
    )
}
