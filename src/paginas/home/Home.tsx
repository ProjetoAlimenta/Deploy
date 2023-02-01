import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box, useMediaQuery } from '@mui/material';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import TimelinePostagem from '../../components/postagens/timelinePostagem/TimelinePostagem';
import ListarUsuarios from '../../components/usuarios/listarUsuarios/ListarUsuarios';
import ListarTemasHome from '../../components/temas/listarTemaHome/listarTemaHome';


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    const matches3 = useMediaQuery('(max-width:767px)');
    const matches4 = useMediaQuery('(min-width:767px)');

    return (
        <>
            <Grid container direction="row" justifyContent="center" className='caixa'>
                <Box marginTop={2} marginBottom={2}>
                    <Grid alignItems="center" item xs={12} sm={12} md={12} lg={6}>   
                            <Box marginTop={2} marginBottom={2} textAlign='center'>
                                <Button type='submit' variant='contained' className="btnModalHome" >
                                    <Link color='white' className='text-decorator-none' to='/formularioPostagem'>
                                        Postar
                                    </Link>
                                </Button>
                            </Box>
                        <Box marginLeft={0.5}>
                            <TimelinePostagem />
                        </Box>
                    </Grid>
                </Box>
                {matches3 ? null :
                    <Grid sm={5}>
                        <Box marginTop={5.8} marginLeft={2} className='boxUsuarios'>
                            <Typography variant="h6" gutterBottom className='textoUsuario'>
                                Usuários
                            </Typography>
                            <Box>
                                <ListarUsuarios />
                            </Box>
                        </Box>
                        <Box marginTop={5.8} marginLeft={2} className='boxUsuarios'>
                            <Typography variant="h6" gutterBottom className='textoUsuario'>
                                Temas em alta
                            </Typography>
                            <Box>
                                <ListarTemasHome />
                            </Box>
                        </Box>
                    </Grid>
                }
            </Grid>
        </>
    );
}

export default Home;