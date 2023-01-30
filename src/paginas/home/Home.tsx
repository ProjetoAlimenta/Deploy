import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box, Card, Toolbar, useMediaQuery } from '@mui/material';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import TimelinePostagem from '../../components/postagens/timelinePostagem/TimelinePostagem';


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

    const matches3 = useMediaQuery('(max-width:1023px)');
    const matches4 = useMediaQuery('(min-width:1023px)');

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Box marginTop={2} marginBottom={2}>
                    <Grid alignItems="center" item xs={12} sm={12} md={12} lg={6}>
                    {matches4 ? null :
                            <Box marginTop={2} marginBottom={2} textAlign='center'>
                                <Button type='submit' variant='contained' className="btnModal" >
                                    <Link className='text-decorator-none' to='/formularioPostagem'>
                                        Postar
                                    </Link>
                                </Button>
                            </Box>
                        }
                        {matches3 ? null :
                            <Box marginTop={2} marginBottom={2} textAlign='center'>
                                <Box marginRight={1}>
                                    <ModalPostagem />
                                </Box>
                            </Box>
                        }
                        <Box marginLeft={0.5}>
                            <TimelinePostagem />
                        </Box>
                    </Grid>
                </Box>

            </Grid>
        </>
    );
}

export default Home;