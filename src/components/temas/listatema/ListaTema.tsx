import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../service/Service';
import Tema from '../../../paginas/models/Tema';
import './ListaTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';


function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState['token']>(
    (state)=> state.token
  )
    let navigate = useNavigate();
  
    useEffect(()=>{
      if(token == ''){
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
  
  
    async function getTema(){
      await busca("/temas", setTemas, {
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
        <Box m={2} >
          <Card className='card' variant="outlined">
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
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
        ))
        }
      </>
    );
  }
  
  
  export default ListaTema;