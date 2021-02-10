import React from 'react';
import Layout from '../layout';
import CardNews from './components/CardNews';
import{
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import {
  makeStyles,
  CircularProgress,
} from '@material-ui/core';
import ImageEmpty from '../../assets/images/empty.svg'


// import api from '../../ServerLess/api'

const useStyles = makeStyles({
  root:{
    height:'100%',
    display:'flex',
    alignItems:'center',
    flexDirection: 'column',
    justifyContent:'center',
    '&.is-empty':{ background:`url(${ImageEmpty}) no-repeat center / 200px`, }
  },
});





const SharedDialog = function ({ open, toggle, link }){
  const [copy, setCopy] = React.useState(false)
  const copyLink = () => {
    document.querySelector("#copy-text").select();
    document.execCommand("copy");
    setCopy(true);
    setTimeout(()=>setCopy(false),2000)
  }

  return ((<Dialog open={open} onClose={toggle} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Compartir</DialogTitle>
    <DialogContent style={{ width: '360px' }}>
      <DialogContentText> Para compartir esta noticia copie el link </DialogContentText>
      <TextField readonly autoFocus fullWidth type="text" label="Link" margin="dense" id="copy-text"
        value={link}
        onClick={copyLink}
      />
    {copy && <span children="Copiado" style={{ color: 'gray' }} />}
  </DialogContent>
  <DialogActions>
    <Button variant="contained" onClick={copyLink} color="primary">
      Copiar
  </Button>
  </DialogActions>
  </Dialog>));
};




export default function NewsPage() {
  const classes = useStyles();
  const [ posts, /* setPosts */ ] = React.useState([]);
  const [ loading, setLoading ] = React.useState(false)
  const [ dialogOpen, setDialogOpen ] = React.useState(false)



  const content = React.useRef(null);
  const onScroll = async ()=>{
    content.current = document.querySelector('.news-content');
    if (!loading && content.current && content.current.getBoundingClientRect().bottom <= 400) {
        await setLoading(true);
      // await api('news/recent',{after:posts.slice(-1)})
        // .then(docs=>setPosts(p=>posts.concat(...docs)))
        await setLoading(false);
      }
  };
  React.useEffect(()=>{
    window.removeEventListener('scroll', onScroll)
    return ()=>window.removeEventListener('scroll', onScroll)
  }, [ onScroll ]);
  return (
    <Layout>
      <SharedDialog open={dialogOpen} toggle={()=>setDialogOpen(!dialogOpen)} />
      <div className={classes.root+(!posts.length?' is-empty ':'')}>
        { posts.map((post, key) => <CardNews {...post} SharedDialog={[dialogOpen, setDialogOpen]} key={key} />) }
        { loading && <CircularProgress size={20} /> }
      </div>
    </Layout>
  );
}
