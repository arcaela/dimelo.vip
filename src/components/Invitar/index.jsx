import {
  Button,
  TextField,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import React, { useState, useRef } from 'react';




export default function Invitar({ auth }) {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false)
  const link = auth?.link() || 'http://dimelo.vip/signup/';
  const enviarInvitacion = ()=>{
    window.open('https://api.whatsapp.com/send?'+new URLSearchParams({
      text:`¡Hey! Únete a mi red de Dimelo.vip utilizando mi enlace de líder de célula ${link}`,
    }), '_blank')
  }
  const copiarEnlace = ()=>{
    if(inputRef.current){
      inputRef.current.querySelector('input').select()
      document.execCommand("copy");
      setCopied(true)
      setTimeout(() => setCopied(false), 2000);
    }
  }
  return (<>
      <Button onClick={() => setOpen(!open)} variant='outlined' color='secondary' >
        Invitar
      </Button>
      <Dialog fullWidth maxWidth="xs" open={ open } onClose={()=>setOpen(false)}>
        <DialogTitle style={{paddingBottom:0}}>Mi enlace de invitación</DialogTitle>
        <DialogContent>
          <TextField
            readOnly
            fullWidth
            value={link}
            ref={inputRef}
            helperText={ copied && '¡Copiado!' }
            InputProps={{
              endAdornment:(<>
                <IconButton color="primary" onClick={()=>copiarEnlace()}>
                  <FileCopyIcon />
                </IconButton>
                <IconButton color="primary" onClick={()=>enviarInvitacion()}>
                  <WhatsAppIcon />
                </IconButton>
              </>)
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
