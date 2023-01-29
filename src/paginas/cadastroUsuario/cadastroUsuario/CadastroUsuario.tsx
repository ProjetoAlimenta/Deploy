import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../../models/User';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';
import { cadastroUsuario } from '../../../services/Service';


function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='fundo8'>
            <Grid item xs={10} sm={6} alignItems='center' >
                <Box marginTop={6}>
                    <form onSubmit={onSubmit} className='fundo7'>
                        <Box>
                            <Typography variant="h4" gutterBottom color="textPrimary" component="h3" className='cadastre' >Cadastre-se</Typography>
                            {matches ? null : <Typography variant="inherit" gutterBottom color="textPrimary" component="p" className='textocadastro' >É rápido e fácil</Typography>}
                        </Box>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} required id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth />
                        <Grid>
                            <Box>
                                <Box marginTop={2} textAlign='center' display='flex' alignItems='center' justifyContent='space-evenly'>
                                    <Box marginRight={2}>
                                        <Button variant='contained' color='secondary'>
                                            <Link to='/login' className='text-decorator-none'>
                                                Voltar
                                            </Link>
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button type='submit' variant='contained' className='registrar'>
                                            Confirmar
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </form>
                </Box>
            </Grid >
        </Grid >
    );
}

export default CadastroUsuario;