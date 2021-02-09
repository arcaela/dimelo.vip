import React from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core'
import { useCardStyles } from './createNew.styles';
export default function CreateNew() {
    const classes = useCardStyles();
   
   
    return (

        <Card className={classes.root}>
            <CardHeader

                title={'Crear noticia'}

            />
            <CardContent>
                <form noValidate autoComplete="off" >
                    <Box>
                        <TextField className={classes.input} id="standard-basic" label="Titulo" />
                    </Box>
                    <Box mt={4}>
                        <TextField className={classes.input}
                            id="outlined-multiline-static"
                            label="Descripción"
                            multiline
                            rows={4}
                            variant="outlined"
                        />
                    </Box>
                    <Box mt={4}>
                        <label>Subir imagen o video</label>
                        <TextField type='file'  variant="outlined" inputProps={{ multiple: true }} className={classes.input}  />
                    </Box>
                    <Box mt={4}>
                        <Button type="submit" variant="contained"  color='primary'>Crear</Button>
                    </Box>
                </form>
            </CardContent>

        </Card>

    )
}
