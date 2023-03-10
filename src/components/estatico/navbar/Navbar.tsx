import React from 'react'
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout(){
    dispatch(addToken(''));
    toast.error("Usuário deslogado",
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
    navigate('/login')
}

    var navbarComponent;

  if(token != ''){
    navbarComponent = <AppBar className="barra" position="relative">
    <Toolbar variant="regular">
      <Box display='flex' width={'100%'}>
      <Box>
        <Typography className='blog' variant="h5" color="inherit">
          Blog do Otavio
        </Typography>
      </Box>

      <Box display="flex" gap="5px">
        <Box mx={1}  className="cursor">
          <Link to="/home" className="text-decorator-none">
            <Typography className='cursor' variant="h6" color="inherit">
              Home
            </Typography>
          </Link>
        </Box>
        <Box mx={1}  className="cursor">
        <Link to="/postagens" className="text-decorator-none">
          <Typography className='cursor' variant="h6" color="inherit">
            Postagens
          </Typography>
          </Link>
        </Box>
        <Box mx={1}  className="cursor">
        <Link to="/temas" className="text-decorator-none">
          <Typography className='cursor' variant="h6" color="inherit">
            Temas
          </Typography>
          </Link>
        </Box>
        <Box mx={1}  className="cursor">
        <Link to="/formularioTema" className="text-decorator-none">
          <Typography className='cursor' variant="h6" color="inherit">
            Cadastrar tema
          </Typography>
          </Link>
        </Box>
        
      </Box>
      </Box>
      <Box mx={1}  className="sair" onClick={goLogout}>
            <Typography  variant="h6" color="inherit" >
              Logout
            </Typography>
        </Box>
    </Toolbar>
  </AppBar>
  }
  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar
