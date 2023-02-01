import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css';

const home = ['Home']
const criarTemas = ['Criar Temas'];
const contatos = ['Integrantes'];
const temas = ['Configurar Temas'];
const logouts = ['Logout'];

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate()
    const dispatch = useDispatch()

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        navigate('/')
    }

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar sx={{ backgroundColor: "green" }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters className='modelo'>
                    <Link to='/home' className="text-decorator-none cursor">
                        <Typography variant="h5" noWrap component="a" className="blogSergio colorNav"
                            sx={{ display: { xs: 'none', md: 'flex' } }} >
                            AlimentAção
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            edge='start'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            {home.map((home) => (
                                <MenuItem key={home} onClick={handleCloseNavMenu}>
                                    <Link to='/home' className="cursor text-decorator-none fontpreto">
                                        <Typography textAlign="center">{home}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {contatos.map((contatos) => (
                                <MenuItem key={contatos} onClick={handleCloseNavMenu}>
                                    <Link to='/contatos' className="cursor text-decorator-none fontpreto">
                                        <Typography textAlign="center">{contatos}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Link to='/home' className="text-decorator-none cursor">
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                className="blogSergio colorNav"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'flex', md: 'none' },
                                    color: 'inherit'
                                }}
                            >
                                AlimentAção         
                                                   </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {home.map((home) => (
                                <Link to='/home' className="text-decorator-none cursor">
                                    <Button
                                        className="colorNav"
                                        key={home}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 1, color: 'white', display: 'block' }}
                                    >
                                        {home}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                            {contatos.map((contatos) => (
                                <Link to='/contatos' className="text-decorator-none cursor">
                                    <Button
                                        className="colorNav"
                                        key={contatos}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 1, color: 'white', display: 'block' }}
                                    >
                                        {contatos}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0, }}>
                        <Tooltip title="Opões do Usuário">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar className='avatarNavbar' alt="" src="https://cdn-icons-png.flaticon.com/512/184/184970.png" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px', color: 'black' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {criarTemas.map((criartema) => (
                                <MenuItem key={criartema} onClick={handleCloseUserMenu}>
                                    <Link to='/formularioTema' className="cursor text-decorator-none fontpreto">
                                        <Typography textAlign="center">{criartema}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {temas.map((editartema) => (
                                <MenuItem key={editartema} onClick={handleCloseUserMenu}>
                                    <Link to='/temas' className="cursor text-decorator-none fontpreto">
                                        <Typography textAlign="center">{editartema}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {logouts.map((logout) => (
                                <MenuItem key={logout} onClick={handleCloseUserMenu}>
                                    <Box className="cursor text-decorator-none fontpreto" onClick={goLogout}>
                                        <Typography textAlign="center">{logout}</Typography>
                                    </Box>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}
export default Navbar;