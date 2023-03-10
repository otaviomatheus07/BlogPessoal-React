import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import './ListaPostagem.css';
import Postagem from '../../../paginas/models/Postagem';
import { busca } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const token = useSelector<TokenState, TokenState['token']>(
    (state)=> state.token
  )
  let navigate = useNavigate();
  
  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }
  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado",
            {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
      navigate("/login")

    }
  }, [token])


  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
    {posts.map((post) => (
      <Box m={2} display="flex" justifyContent='center' >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {post.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {post.texto}
            </Typography>
            <Typography variant="body2" component="p">
              Postado em: {new Intl.DateTimeFormat('pt-BR',{dateStyle: 'short', timeStyle:'medium'}).format(new Date(post.date))}
            </Typography>
            <Typography variant="body2" component="p">
              {post.tema?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>
              <Link
                to={`/formularioPostagem/${post.id}`}
                className="text-decorator-none"
              >
                <Box mx={1}>
                  <Button
                    variant="contained"
                    className="marginLeft"
                    size="small"
                    color="primary"
                  >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link
                to={`/deletarPostagem/${post.id}`}
                className="text-decorator-none"
              >
                <Box mx={1}>
                  <Button variant="contained" size="small" color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    ))}
  </>
);
}

export default ListaPostagem;