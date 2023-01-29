import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { busca } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import './TimelinePostagem.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function TimelinePostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length])



  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };




  return (
    <>
      {
        posts.map(post => (
          <Card className='cardProp'>
            <CardHeader className='nomeCards'
              avatar={
                <Avatar sx={{ bgcolor: green[700] }} aria-label="recipe">
                  <img className='imgCards' src={post.usuario?.foto} alt="" />
                </Avatar>
              }
              action={
                <><IconButton onClick={handleOpenNavMenu}
                  color="inherit">
                  <MoreVertIcon />
                </IconButton><Menu 
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
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to={`/formularioPostagem/${post.id}`} className="linksCards">
                        <Button variant="outlined" size='small' sx={{ bgcolor: green[200], maxWidth: '18vh', justifyContent: 'center' }} color="inherit" endIcon={<EditIcon />}>
                          Editar
                        </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to={`/deletarPostagem/${post.id}`} className="linksCards">
                        <Button variant="outlined" size='small' sx={{bgcolor: green[200], maxWidth: '18vh', justifyContent: 'center' }} color="inherit" endIcon={<DeleteIcon />}>
                          Deletar
                        </Button>
                      </Link>
                    </MenuItem>

                  </Menu></>
              }
              title={post.usuario?.nome}
              subheader={post.tema?.temaPrincipal}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" className='tituloCard'>
                {post.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary" className='textoCard'>
                {post.texto}
              </Typography>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}

export default TimelinePostagem;