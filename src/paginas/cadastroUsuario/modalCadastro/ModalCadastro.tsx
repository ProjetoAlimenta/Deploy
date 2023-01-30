import React, { ChangeEvent, useEffect, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from "@material-ui/core";
import { Box, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import './ModalCadastro.css';
import '../cadastroUsuario/CadastroUsuario.css';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../../services/Service';
import User from '../../../models/User';
import { toast } from 'react-toastify';

function ModalCadastroUsuario() {

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
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={10} sm={10} md={6} alignItems='center' >
                <Box >
                    <form onSubmit={onSubmit}>
                        <Box>
                            <Typography variant="h4" gutterBottom color="textPrimary" component="h3" className='cadastre' >Cadastre-se</Typography>
                            {matches ? null : <Typography variant="inherit" gutterBottom color="textPrimary" component="p" className='textocadastro' >É rápido e fácil</Typography>}
                        </Box>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='nome' label='Nome' variant='filled' name='nome' margin='normal' className='textobg' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='usuario' label='Usuario' variant='filled' name='usuario' margin='normal' className='textobg' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required id='senha' label='Senha' variant='filled' name='senha' margin='normal' type='password' className='textobg' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} required id='confirmarSenha' label='Confirmar Senha' variant='filled' name='confirmarSenha' margin='normal' className='textobg' type='password' fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Foto' variant='filled' name='foto' margin='normal' className='textobg' fullWidth />
                        <Grid>
                            <Box>
                                <Box marginTop={2} textAlign='center' display='flex' alignItems='center' justifyContent='space-evenly'>
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


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 700,
            background: 'linear-gradient(rgba(0, 250, 75, 1),white)',
            border: '2px solid #000',
            boxShadow: theme.shadows[2],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalCadastro() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />

            </Box>

            <ModalCadastroUsuario />

        </div>
    );

    return (
        <Grid>
            <Button
                variant="contained"
                className='Cadastrar2'
                onClick={handleOpen}>Cadastrar</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </Grid>
    );
}
export default ModalCadastro