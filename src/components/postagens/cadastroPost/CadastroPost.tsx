import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid } from "@material-ui/core";
import './CadastroPost.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import User from '../../../models/User';
import { Box } from '@mui/material';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const [usuarios, setUsuarios] = useState<User[]>([])

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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            temaPrincipal: ''
        })

    const [usuario, setUsuario] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
        })


    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null,
        usuario: null

    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
            usuario: usuario
        })
    }, [tema, usuario])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getUsers() {
        await busca("/usuarios/all", setUsuarios, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getUsers()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso', {
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
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso', {
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
        back()

    }

    function back() {
        navigate('/home')
    }

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} sm={6} alignItems='center' >
                    <form onSubmit={onSubmit}>
                        <Grid xs={6}>
                            <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                                id="titulo"
                                label="Titulo"
                                variant="outlined"
                                name="titulo"
                                margin="normal"
                                fullWidth />
                        </Grid>
                        <Box>
                            <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                                id="texto"
                                label="O que está pensando?"
                                name="texto"
                                variant="filled"
                                margin="dense"
                                multiline />
                        </Box>
                        <Grid>
                            <Grid>
                                <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, {
                                        headers: {
                                            'Authorization': token
                                        }
                                    })}>
                                    {
                                        temas.map(tema => (
                                            <MenuItem value={tema.id}>{tema.temaPrincipal}</MenuItem>
                                        ))
                                    }
                                </Select>
                                <FormHelperText>Escolha um tema para sua postagem</FormHelperText>
                            </Grid>
                            <Grid>
                                <InputLabel id="demo-simple-select-helper-label">Usuário</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    onChange={(e) => buscaId(`/usuarios/${e.target.value}`, setUsuario, {
                                        headers: {
                                            'Authorization': token
                                        }
                                    })}>
                                    {
                                        usuarios.map(usuario => (
                                            <MenuItem value={usuario.id}>{usuario.nome}</MenuItem>
                                        ))
                                    }
                                </Select>
                                <FormHelperText>Usuário para a postagem</FormHelperText>
                            </Grid>
                            <Grid>
                                <Box marginTop={2} textAlign='center' display='flex' alignItems='center' justifyContent='space-evenly'>
                                    <Box>
                                        <Button type="submit" variant="contained" color="primary">
                                            Finalizar
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button variant='contained' color='secondary'>
                                            <Link to='/home' className='text-decorator-none'>
                                                Voltar
                                            </Link>
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>

                        </Grid>
                    </form>
                </Grid >
            </Grid>
        </>
    )
}

export default CadastroPost;