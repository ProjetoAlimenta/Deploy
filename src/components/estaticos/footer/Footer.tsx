import React from 'react';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='grids'>
                <Grid item xs={12}>
                    <Box>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" className='boxs'>
                            <Typography variant="h5" align="center" className='textos' gutterBottom>Siga-nos no GitHub</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='boxs'>
                        <a href="https://github.com/ProjetoAlimenta" target="_blank" rel="noopener noreferrer">
                                <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='boxs'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center"  className='textos' gutterBottom  >Projeto AlimentAção© 2023 Copyright:</Typography>
                        </Box>
                        <Box className='boxs'>
                            <a target="_blank" href="" rel="" className='textos'>
                                <Typography variant="subtitle2" gutterBottom align="center" >Projeto Alimentação</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
               
            </Grid>
        </>
    )
}

export default Footer;