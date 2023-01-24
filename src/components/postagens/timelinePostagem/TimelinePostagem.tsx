import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import './TimelinePostagem.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

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

  return (
    <>
      {
        posts.map(post => (
          <Grid alignContent='center' justifyContent='center' xs={12} sm={5}>
            <Box m={2} className='justifyCard' >
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {post.titulo}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.tema?.descricao}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.texto}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))
      }
    </>
  )
}

export default TimelinePostagem;