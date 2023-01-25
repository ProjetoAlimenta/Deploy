import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography, Input, Fab } from '@material-ui/core';
import {Box} from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  //filtrar palavras
    const [words, setWords] = useState([]);
    const [filteredWords, setFilteredWords] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      fetch('https://projetoalimentacao.onrender.com/swagger#/')
        .then(res => res.json())
        .then(data => setWords(data))
    }, []);
  
    // useEffect(() => {
    //   const filtered = words.filter(word => 
    //     word.includes(searchTerm)
    //   );
    //   setFilteredWords(filtered);
    // }, [searchTerm, words]);
 //filtrar palavras


  useEffect(()=>{
    if(token == ''){
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


  async function getTema(){
    await busca("/tema", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema =>(
        <>
        <Box>
          <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Pesquisar Tema </Typography>
            <div><input type="text" placeholder="Pesquise" onChange={event => setSearchTerm(event.target.value)}/>
      <ul>
        {filteredWords.map(word => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
          </CardContent>
          </Card>
        </Box>
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
             {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                <Button variant="outlined" size='small' color="primary" endIcon={<EditIcon />}>
                          atualizar
                        </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                <Button variant="outlined" size='small' color="secondary"  endIcon={<DeleteIcon />}>
                          deletar
                        </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      </>
      ))
      }
    </>
  );
}


export default ListaTema;