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
import User from '../../../models/User';


function ListarUsuarios() {
  const [users, setUsers] = useState<User[]>([])
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

  async function getUser() {
    await busca("/usuarios/all", setUsers, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getUser()
  }, [users.length])

  return (
    <>
      {
        users.map(user => (
          <Card sx={{backgroundColor:'#adffad', marginBottom:'2px'}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[700] }} aria-label="recipe">
                  <img className='imgCards' src={user.foto} alt="" />
                </Avatar>
              }
              title={user.nome}
            />
          </Card>
        ))
      }
    </>
  )
}
export default ListarUsuarios;