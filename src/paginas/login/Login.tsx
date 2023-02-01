import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box, Divider, useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";
import { toast } from 'react-toastify';
import ModalCadastro from '../cadastroUsuario/modalCadastro/ModalCadastro';

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/auth/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    const matches = useMediaQuery('(max-width:600px)');
    const matches2 = useMediaQuery('(min-width:600px)');
    const matches3 = useMediaQuery('(max-width:1023px)');
    const matches4 = useMediaQuery('(min-width:1023px)');


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='fundo padding5' >
            <Grid alignItems='center' xs={1} sm={8}>
                <Box>
                    {matches ? null : <Typography variant="h4" gutterBottom color="textPrimary" component="h3" className='txt1'>Bem vindo ao</Typography>}
                    {matches ? null : <Typography variant="h4" gutterBottom color="textPrimary" component="h3" className='txt2' >Aliment<span className='colorGreen'>Ação</span></Typography>}
                    {matches ? null : <p className='txt4'>Lutando por um Brasil mais <span className='colorGreen verde'>Verde</span></p>}
                    {matches ? null : <Typography variant="h5" gutterBottom color="textPrimary" component="h5" className='txt3'>Aqui você terá a oportunidade de divulgar informações e idéias relacionadas a fome no Brasil</Typography>}
                </Box>
            </Grid>
            <Grid alignItems='center' xs={9} sm={4}>
                <Box marginTop={6}>
                    <form onSubmit={onSubmit} className='fundoLogin'>
                        <Box >
                            {matches2 ? null : <Typography variant="h4" className='login' >Login</Typography>}
                        </Box>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario'
                            label='usuário'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth />
                        <Box marginTop={2} marginBottom={2} textAlign='center'>
                            <Button type='submit' variant='contained' className='Entrar' >
                                Entrar
                            </Button>
                        </Box>
                        <Divider />
                        {matches4 ? null :
                            <Box marginTop={2} marginBottom={2} textAlign='center'>
                                <Button type='submit' variant='contained' className='Cadastrar' >
                                    <Link className='text-decorator-none' to='/cadastrousuario'>
                                        Cadastrar
                                    </Link>
                                </Button>
                            </Box>
                        }
                        {matches3 ? null :
                            <Box marginTop={2} marginBottom={2} textAlign='center'>
                                <Box marginRight={1}>
                                    <ModalCadastro />
                                </Box>
                            </Box>
                        }
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default Login;